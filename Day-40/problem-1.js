/**
 * PROBLEM–01: 🏛️ National Pension Eligibility

 * Logic: Checks age, work history, and disability to determine pension tier.
 */

function checkPensionEligibility(age, yearsOfWork, isDisabled) {

    // --- STEP 1: DATA VALIDATION ---
    // Ensure age and yearsOfWork are non-negative numbers
    // Ensure isDisabled is a boolean type
    if (
        typeof age !== 'number' || age < 0 ||
        typeof yearsOfWork !== 'number' || yearsOfWork < 0 ||
        typeof isDisabled !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: FULL PENSION LOGIC ---
    // Rule: Age 65+ OR (Age 50+ AND disability status is true)
    if (age >= 65 || (age >= 50 && isDisabled === true)) {
        return "Full Pension";
    }

    // --- STEP 3: PARTIAL PENSION LOGIC ---
    // Rule: Age between 60-64 AND at least 20 years of work experience
    else if (age >= 60 && age <= 64 && yearsOfWork >= 20) {
        return "Partial Pension";
    }

    // --- STEP 4: DEFAULT CASE ---
    // If none of the above criteria are met, the citizen is not eligible
    else {
        return "Not Eligible";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkPensionEligibility(65, 10, false));
console.log(checkPensionEligibility(61, 25, false));
console.log(checkPensionEligibility(55, 15, true));
console.log(checkPensionEligibility(55, 30, false));
console.log(checkPensionEligibility("65", 10, false));