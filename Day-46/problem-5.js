/**
 * PROBLEM–05: 🏥 Vaccine Appointment Eligibility

 * Logic: Categorizes citizens for vaccination.
 * - Seniors (65+) or Medical cases = Priority.
 * - Adults (18-64) = Eligible.
 * - Children (<18) = Waitlist.
 */

function isEligibleForVaccine(age, hasMedicalCondition) {

    // --- STEP 1: VALIDATION ---
    // Age must be between 0 and 120. Condition must be boolean.
    if (
        typeof age !== "number" || age < 0 || age > 120 ||
        typeof hasMedicalCondition !== "boolean" ||
        Number.isNaN(age)
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: PRIORITY CHECK ---
    // If they are old OR have a condition, they go first.
    if (age >= 65 || hasMedicalCondition === true) {
        return "Priority";
    }

    // --- STEP 3: STANDARD ELIGIBILITY ---
    // Regular adults.
    else if (age >= 18) {
        return "Eligible";
    }

    // --- STEP 4: UNDERAGE ---
    else {
        return "Waitlist";
    }
}

// --- Example Usage ---
console.log(isEligibleForVaccine(25, true));
console.log(isEligibleForVaccine(70, false));
console.log(isEligibleForVaccine(30, false));
console.log(isEligibleForVaccine(12, false));
console.log(isEligibleForVaccine(150, true));