/**
 * PROBLEM–03: 💧 Smart Water Billing (Subsidy Logic)

 * Logic: Calculates tiered water costs, applies low-income subsidies,
 * and ensures a minimum billing threshold.
 */

function calculateWaterBill(unitsUsed, isLowIncome) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure unitsUsed is a non-negative number and isLowIncome is a boolean
    if (typeof unitsUsed !== 'number' || unitsUsed < 0 || typeof isLowIncome !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TIERED BILLING ---
    let bill = 0;
    if (unitsUsed <= 50) {
        // Tier 1: First 50 units cost 10 TK each
        bill = unitsUsed * 10;
    } else {
        // Tier 2: First 50 units at 10 TK + additional units at 20 TK each
        bill = (50 * 10) + ((unitsUsed - 50) * 20);
    }

    // --- STEP 3: APPLY LOW-INCOME SUBSIDY ---
    // Rule: Reduce the total bill by 30% if the household is low-income
    if (isLowIncome === true) {
        bill = Math.round(bill * 0.70); // (100% - 30% = 70% or 0.70)
    }

    // --- STEP 4: ENFORCE MINIMUM BILL RULE ---
    // Rule: Every household must pay at least a minimum of 100 TK
    if (bill < 100) {
        bill = 100;
    }

    // Return the final calculated bill amount
    return bill;
}

// --- EXAMPLE USAGE ---
console.log(calculateWaterBill(40, false));
console.log(calculateWaterBill(60, true));
console.log(calculateWaterBill(5, true));
console.log(calculateWaterBill(-10, false));