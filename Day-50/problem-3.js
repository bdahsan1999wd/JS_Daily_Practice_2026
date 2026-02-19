/**
 * 💰 PROBLEM–03: checkLoanStatus()

 * Logic: Multi-factor validation for financial risk assessment.
 */

function checkLoanStatus(monthlyIncome, existingLoan, creditScore) {

    // --- STEP 1: VALIDATION ---
    // creditScore must be in standard range (300-850). Income must be non-negative.
    if (
        typeof monthlyIncome !== 'number' || monthlyIncome < 0 ||
        typeof existingLoan !== 'boolean' ||
        typeof creditScore !== 'number' || creditScore < 300 || creditScore > 850
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: REJECTION CRITERIA (CHECK FIRST) ---
    if (monthlyIncome < 15000 || creditScore < 600) {
        return "Rejected";
    }

    // --- STEP 3: APPROVAL CRITERIA ---
    if (monthlyIncome > 20000 && existingLoan === false && creditScore > 700) {
        return "Approved";
    }

    // --- STEP 4: ALL OTHER VALID CASES ---
    return "Under Review";
}

// --- EXAMPLE USAGE ---
console.log(checkLoanStatus(25000, false, 750));
console.log(checkLoanStatus(10000, false, 800));
console.log(checkLoanStatus(30000, true, 650));