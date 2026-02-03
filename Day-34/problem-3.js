/**
 * PROBLEM–03: ⚡ Smart Electricity Bill Estimator
 * Objective: Calculate an electricity bill based on unit consumption tiers,
 * adding a commercial tax if applicable, and applying a solar discount.
 */

function electricityBill(units, hasSolar, isCommercial) {

    // --- STEP 1: INPUT VALIDATION ---
    /**
     * Before calculating, we must ensure the inputs are valid.
     * 1. 'units' must be a number and cannot be negative.
     * 2. 'hasSolar' and 'isCommercial' must be booleans (true/false).
     * If any check fails, we stop and return "Invalid Input".
     */
    if (typeof units !== 'number' || units < 0 ||
        typeof hasSolar !== 'boolean' || typeof isCommercial !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE BASE BILL (TIERED SYSTEM) ---
    /**
     * The cost per unit changes based on how much you use:
     * - First 100 units: 5 TK each.
     * - Any units over 100: 10 TK each.
     */
    let baseBill = 0;
    if (units <= 100) {
        // If usage is 100 or less, just multiply by 5.
        baseBill = units * 5;
    } else {
        // If usage is over 100:
        // First 100 units = 100 * 5 (500 TK)
        // Remaining units = (Total units - 100) * 10
        baseBill = (100 * 5) + ((units - 100) * 10);
    }

    // --- STEP 3: APPLY COMMERCIAL SURCHARGE (TAX) ---
    /**
     * Commercial properties have to pay an extra 15% tax.
     * If 'isCommercial' is true, we calculate 15% of the baseBill and add it.
     */
    let totalWithTax = baseBill;
    if (isCommercial === true) {
        let taxAmount = baseBill * 0.15; // Calculate 15% tax
        totalWithTax = baseBill + taxAmount; // Add tax to base bill
    }

    // --- STEP 4: APPLY SOLAR POWER INCENTIVE (DISCOUNT) ---
    /**
     * To encourage green energy, solar users get a 20% discount.
     * This discount is calculated based on the total bill (after tax).
     */
    let finalBill = totalWithTax;
    if (hasSolar === true) {
        let discountAmount = totalWithTax * 0.20; // Calculate 20% discount
        finalBill = totalWithTax - discountAmount; // Subtract discount from total
    }

    // --- STEP 5: DETERMINE CATEGORY ---
    /**
     * We assign a label to the bill based on priority:
     * Priority 1: If they have solar -> "Solar Powered"
     * Priority 2: If they are commercial (and no solar) -> "Commercial"
     * Priority 3: Otherwise -> "Residential"
     */
    let category;
    if (hasSolar === true) {
        category = "Solar Powered";
    } else if (isCommercial === true) {
        category = "Commercial";
    } else {
        category = "Residential";
    }

    // --- STEP 6: RETURN FINAL RESULT ---
    /**
     * Electricity bills often have many decimals.
     * .toFixed(2) rounds the bill to 2 decimal places (e.g., 100.50).
     * Since .toFixed() returns a string, we use Number() to convert it back to a number.
     */
    let roundedBill = Number(finalBill.toFixed(2));

    return {
        totalBill: roundedBill,
        category: category
    };
}

// --- EXAMPLE USAGE ---
console.log(electricityBill(150, false, false));
console.log(electricityBill(100, true, false));