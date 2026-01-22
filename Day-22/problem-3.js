function cartPricingEngine(cart, stock, coupon) {
    // --- Input Validation ---
    if (!Array.isArray(cart) || typeof stock !== "object" || typeof coupon !== "number") return "Invalid Input";

    const itemIds = new Set();
    for (const item of cart) {
        if (
            typeof item.id !== "number" ||
            typeof item.price !== "number" ||
            typeof item.qty !== "number"
        ) return "Invalid Input";
        if (itemIds.has(item.id)) return "Invalid Input"; // no duplicate items
        itemIds.add(item.id);
    }

    const finalItems = [];
    const removedItems = [];

    // --- Stock Validation ---
    for (const item of cart) {
        if (!stock[item.id] || stock[item.id] < item.qty) {
            removedItems.push(item.id);
        } else {
            finalItems.push(item);
        }
    }

    // --- Calculate Total ---
    let subtotal = finalItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Apply coupon first
    subtotal -= coupon;

    // Ensure subtotal is not negative
    if (subtotal < 0) subtotal = 0;

    // Apply VAT 10%
    subtotal *= 1.1;

    // Add shipping cost
    subtotal += 20;

    // Round to 2 decimal places
    const total = Math.round(subtotal * 100) / 100;

    return { finalItems, removedItems, total };
}

// --- Example Usage ---
const cartResult = cartPricingEngine(
    [
        { id: 1, price: 100, qty: 2 },
        { id: 2, price: 50, qty: 1 },
    ],
    { 1: 5, 2: 0 }, // stock
    10 // coupon
);

console.log(cartResult);
