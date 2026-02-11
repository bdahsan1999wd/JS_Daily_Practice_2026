// 🧩 PROBLEM–03: 🍔 Dynamic Food Pricing

// Logic: Calculates total costs by adding distance fees, applying rainy-weather surcharges, and enforcing a maximum price cap.

function calculateFoodPrice(basePrice, distance, isRainy) {

    // --- STEP 1: INPUT VALIDATION ---
    if (
        typeof basePrice !== 'number' || basePrice < 0 ||
        typeof distance !== 'number' || distance < 0 ||
        typeof isRainy !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE DELIVERY FEE ---
    // Fee is 15 TK/km, but waived if base price is greater than 1000
    let deliveryFee = basePrice > 1000 ? 0 : distance * 15;

    // --- STEP 3: APPLY WEATHER SURCHARGE ---
    let total = basePrice + deliveryFee;
    if (isRainy === true) {
        total = total * 1.30; // Apply 30% increase to subtotal
    }

    // --- STEP 4: ENFORCE PRICE CAP ---
    // Final price cannot exceed 200% of the base price
    let maxPrice = basePrice * 2;
    if (total > maxPrice) {
        return maxPrice;
    }

    return total;
}

// --- EXAMPLE USAGE ---
console.log(calculateFoodPrice(500, 10, true));
console.log(calculateFoodPrice(100, 20, true));
console.log(calculateFoodPrice(1200, 5, false));