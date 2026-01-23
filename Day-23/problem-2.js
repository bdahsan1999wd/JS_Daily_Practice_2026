function smartBillingSystem(products, offers, cart) {

    // --- Input validation ---
    // Check if 'products' is an object, 'offers' is an array, and 'cart' is an array
    if (typeof products !== "object" || !Array.isArray(offers) || !Array.isArray(cart)) return "Invalid Input";

    // Check that every product in the cart exists in the products list
    for (const item of cart) if (!products[item]) return "Invalid Input";

    // --- Count items in cart ---
    const counts = {}; // object to store how many of each product is in cart
    for (const item of cart) counts[item] = (counts[item] || 0) + 1;

    // --- Calculate original total ---
    let originalTotal = 0; // sum of all products without offers
    for (const item in counts) originalTotal += counts[item] * products[item];

    const appliedOffers = [];      // keep track of which offers are applied
    let discountedTotal = originalTotal; // start with full price
    const usedItems = new Set();   // track items already discounted (can't apply multiple offers on same product)

    // --- Apply item-level offers ---
    for (const offer of offers) {
        if (offer.type === "BUY_X_GET_Y") {
            const item = offer.product;
            // Apply only if item exists in cart and hasn't been used in another offer
            if (counts[item] && !usedItems.has(item)) {
                // Calculate number of free items
                const free = Math.floor(counts[item] / (offer.x + offer.y)) * offer.y;
                // Subtract the price of free items from total
                discountedTotal -= free * products[item];
                // Record applied offer
                appliedOffers.push(`BUY_X_GET_Y on ${item}`);
                // Mark item as used
                usedItems.add(item);
            }
        } else if (offer.type === "FLAT_DISCOUNT") {
            const item = offer.product;
            if (counts[item] && !usedItems.has(item)) {
                // Subtract flat percentage discount from total
                discountedTotal -= counts[item] * products[item] * (offer.percent / 100);
                appliedOffers.push(`FLAT_DISCOUNT on ${item}`);
                usedItems.add(item);
            }
        }
    }

    // --- Apply bundle offers ---
    // Bundles can include multiple products, discount applies to full sets
    for (const offer of offers) {
        if (offer.type === "BUNDLE") {
            // Find how many complete bundles exist in cart
            const bundleCount = Math.min(...offer.items.map(i => counts[i] || 0));
            if (bundleCount > 0) {
                // Subtract total bundle discount
                discountedTotal -= bundleCount * offer.discount;
                appliedOffers.push(`BUNDLE ${offer.items.join("+")}`);
            }
        }
    }

    // --- Return final result ---
    return {
        originalTotal,
        finalTotal: Math.round(discountedTotal),                 // final total after all discounts
        totalDiscount: Math.round(originalTotal - discountedTotal), // total discount applied
        appliedOffers                                           // list of all offers applied
    };
}

// --- Example ---
console.log(smartBillingSystem(
    { rice: 60, oil: 120, sugar: 80 },
    [
        { type: "BUY_X_GET_Y", product: "rice", x: 2, y: 1 },
        { type: "FLAT_DISCOUNT", product: "oil", percent: 10 },
        { type: "BUNDLE", items: ["rice", "sugar"], discount: 20 },
    ],
    ["rice", "rice", "rice", "oil", "sugar"]
));