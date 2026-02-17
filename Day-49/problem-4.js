/**
 * ☀️ PROBLEM–04: calculateSolarBill()

 * Logic: Calculates usage, applies discounts, but enforces a minimum base price.
 */

function calculateSolarBill(unitsUsed, isOffPeak) {

    // --- STEP 1: VALIDATION ---
    if (typeof unitsUsed !== 'number' || unitsUsed < 0 || typeof isOffPeak !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: INITIAL CALCULATION ---
    let totalCost = unitsUsed * 5;

    // --- STEP 3: APPLY DISCOUNT ---
    if (isOffPeak === true) {
        totalCost = totalCost * 0.8; // Applying 20% discount
    }

    // --- STEP 4: ENFORCE MINIMUM BILL ---
    // Math.max returns the larger value, ensuring the bill never drops below $50.
    return Math.max(totalCost, 50);
}

// --- EXAMPLE USAGE ---
console.log(calculateSolarBill(20, false));
console.log(calculateSolarBill(5, true));
console.log(calculateSolarBill(30, true));