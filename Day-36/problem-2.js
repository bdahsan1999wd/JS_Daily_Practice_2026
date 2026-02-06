/**
 * PROBLEM–02: 🛒 Dynamic Combo Discount

 * Logic: Calculates total after applying conditional category and first-order discounts.
 */

function calculateComboPrice(cartTotal, itemCategories, isFirstOrder) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure total is positive and categories are provided as a non-empty array
    if (typeof cartTotal !== 'number' || cartTotal <= 0 || !Array.isArray(itemCategories) || itemCategories.length === 0) {
        return "Invalid Input";
    }

    let finalPrice = cartTotal;

    // --- STEP 2: APPLY COMBO DISCOUNT ---
    // If BOTH 'Electronics' and 'Gadgets' are present, apply a 15% discount
    if (itemCategories.includes("Electronics") && itemCategories.includes("Gadgets")) {
        finalPrice = finalPrice * 0.85; // 0.85 represents 85% of original price (15% off)
    }

    // --- STEP 3: APPLY NEW USER BONUS ---
    // Subtract a fixed 200 TK for first-time orders
    if (isFirstOrder === true) {
        finalPrice = finalPrice - 200;
    }

    // --- STEP 4: FINAL CHECK ---
    // Ensure price doesn't go below 0 and round to 2 decimal places
    const result = finalPrice < 0 ? 0 : Number(finalPrice.toFixed(2));
    return result;
}

// --- EXAMPLE USAGE ---
console.log(calculateComboPrice(1000, ["Electronics", "Gadgets", "Food"], false));
console.log(calculateComboPrice(1000, ["Electronics", "Gadgets"], true));
console.log(calculateComboPrice(150, ["Clothing"], true));