/**
 * PROBLEM–01: 💳 Smart Credit Card Eligibility

 * Logic: Checks financial status to assign card tiers.
 */

function checkCreditEligibility(income, creditScore, hasExistingDebt) {

    // --- STEP 1: INPUT VALIDATION ---
    // Validate that income is a positive number and creditScore is within the valid range (300-850)
    if (typeof income !== 'number' || income <= 0 ||
        typeof creditScore !== 'number' || creditScore < 300 || creditScore > 850) {
        return "Invalid Input";
    }

    // --- STEP 2: ELIGIBILITY LOGIC ---
    // Rule: Platinum Tier requires high income AND high credit score regardless of debt
    if (income >= 100000 && creditScore >= 750) {
        return { isEligible: true, cardTier: "Platinum" };
    }
    // Rule: Gold Tier requires mid income, good score, AND must be debt-free
    else if (income >= 50000 && creditScore >= 650 && hasExistingDebt === false) {
        return { isEligible: true, cardTier: "Gold" };
    }
    // Default: If no conditions are met, the application is rejected
    else {
        return { isEligible: false, cardTier: "None" };
    }
}

// --- EXAMPLE USAGE ---
console.log(checkCreditEligibility(120000, 800, true));
console.log(checkCreditEligibility(55000, 700, false));
console.log(checkCreditEligibility(45000, 600, false));