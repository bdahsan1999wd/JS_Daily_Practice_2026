/**
 * 🚔 PROBLEM–04: issuePass()
 *
 * Implements a priority-based logic for curfew passes.
 */

function issuePass(jobRole, age) {

    // --- STEP 1: STRICT VALIDATION ---
    // age must be an integer and above 0. jobRole must be a string.
    if (typeof jobRole !== 'string' || !Number.isInteger(age) || age <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: PRIORITY HIERARCHY ---
    // Rule 1: Profession-based priority (Age doesn't matter for these roles).
    if (jobRole === "Doctor" || jobRole === "Journalist") {
        return "Permanent Pass";
    }

    // Rule 2: Age-based condition for everyone else.
    if (age >= 18) {
        return "Temporary Pass";
    }

    // Rule 3: Fallback for minors without specific roles.
    return "Denied";
}

// --- EXAMPLE USAGE ---
console.log(issuePass("Doctor", 15));
console.log(issuePass("Student", 20));
console.log(issuePass("Student", 16));
