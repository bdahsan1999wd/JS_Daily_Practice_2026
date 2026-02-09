/**
 * PROBLEM–01: ⚡ Smart Grid Load Balancer

 * Logic: Calculates electricity bills using dynamic pricing based on sector (Industrial/Residential),
 * peak hour demand, and low-usage environmental discounts.
 */

function calculateElectricityBill(units, isPeakHour, isIndustrial) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure units is a non-negative number
    // Ensure the category and time flags are strictly boolean
    if (
        typeof units !== 'number' || units < 0 ||
        typeof isPeakHour !== 'boolean' ||
        typeof isIndustrial !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE BASE RATE ---
    // Base Rate: 12 TK for Industrial, 8 TK for Residential
    let unitRate = isIndustrial ? 12 : 8;

    // --- STEP 3: APPLY PEAK HOUR SURCHARGE ---
    // Rule: Add 25% surcharge to the unit rate during peak hours
    if (isPeakHour === true) {
        unitRate = unitRate * 1.25;
    }

    // --- STEP 4: CALCULATE INITIAL BILL ---
    let totalBill = units * unitRate;

    // --- STEP 5: APPLY CLEAN ENERGY DISCOUNT ---
    // Rule: If usage is low (under 100 units), subtract a flat 50 TK
    if (units < 100) {
        totalBill -= 50;
    }

    // Return the final calculated amount
    return totalBill;
}

// --- EXAMPLE USAGE ---
console.log(calculateElectricityBill(200, true, false));
console.log(calculateElectricityBill(80, false, false));
console.log(calculateElectricityBill(100, false, true));
console.log(calculateElectricityBill(-10, true, false));