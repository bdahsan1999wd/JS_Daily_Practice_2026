/**
 * 🏥 PROBLEM–03: getClinicPriority()

 * Logic: Prioritizes vulnerable age groups (Elderly/Children) over general symptoms.
 */

function getClinicPriority(age, hasFever) {

    // --- STEP 1: VALIDATION ---
    // age must be an integer between 1 and 110. hasFever must be boolean.
    if (!Number.isInteger(age) || age < 1 || age > 110 || typeof hasFever !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: AGE-BASED PRIORITY ---
    // Rule 1: High priority for seniors (60+) and young children (<=5).
    if (age >= 60 || age <= 5) {
        return "High";
    }

    // --- STEP 3: SYMPTOM-BASED PRIORITY ---
    // For the 6-59 age group, priority depends on fever.
    return hasFever ? "Medium" : "Low";
}

// --- EXAMPLE USAGE ---
console.log(getClinicPriority(70, false));
console.log(getClinicPriority(25, true));
console.log(getClinicPriority(-5, true));
