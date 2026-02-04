/*
=> PROBLEM–04: 🧪 Water Purification Advisor

=> Logic: Health risk assessment. Boundary logic ensures exact values (like 100 TDS) fall into the "Good" category.

*/

function waterQualityChecker(tdsLevel, usageDays) {
    // --- STEP 1: VALIDATION ---
    if (
        typeof tdsLevel !== 'number' || tdsLevel <= 0 ||
        typeof usageDays !== 'number' || usageDays <= 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: SAFETY LOGIC ---
    // Rule 1: Pure Water range
    if (tdsLevel < 100 && usageDays <= 180) {
        return { status: "Pure Water", isSafeToDrink: true };
    }
    // Rule 2: Good Water range (Boundary inclusive for 100 and 300)
    else if (tdsLevel >= 100 && tdsLevel <= 300 && usageDays <= 180) {
        return { status: "Good (Service Soon)", isSafeToDrink: true };
    }
    // Rule 3: Unsafe/Warning (High TDS or expired filter)
    else {
        return { status: "Change Filter Immediately", isSafeToDrink: false };
    }
}

// --- EXAMPLE USAGE ---
console.log(waterQualityChecker(80, 50));
console.log(waterQualityChecker(150, 200));