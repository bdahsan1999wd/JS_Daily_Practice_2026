/**
 * 🚚 PROBLEM–01: calculateLogisticsCost()

 * Logic: Calculates a base shipping cost and applies conditional surcharges or flat fees.
 */

function calculateLogisticsCost(distanceKm, weightKg, productType) {

    // --- STEP 1: VALIDATION ---
    // Distance and Weight must be positive numbers. productType must be a string.
    if (
        typeof distanceKm !== 'number' || distanceKm <= 0 ||
        typeof weightKg !== 'number' || weightKg <= 0 ||
        typeof productType !== 'string'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE BASE TOTAL ---
    const baseRate = 20;
    const distanceFee = distanceKm * 2;
    const weightFee = weightKg * 5;
    let total = baseRate + distanceFee + weightFee;

    // --- STEP 3: APPLY PRODUCT SPECIFIC RULES ---
    if (productType === "Perishable") {
        // Apply 15% surcharge to the current total
        total = total + (total * 0.15);
    }
    else if (productType === "Electronic") {
        // Add a flat insurance fee of $50
        total = total + 50;
    }
    
    // No extra charges for other product types
    return total;
}

// --- EXAMPLE USAGE ---
console.log(calculateLogisticsCost(10, 2, "Perishable"));
console.log(calculateLogisticsCost(5, 1, "Electronic"));