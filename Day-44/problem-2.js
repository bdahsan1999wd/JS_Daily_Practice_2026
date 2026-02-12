/**
 * 🧩 PROBLEM–02: 🛂 Voter Eligibility Checker

 * Logic: A multi-step verification process to authorize a person for voting.
 */

function isEligibleToVote(age, isCitizen, isRegistered) {

    // --- STEP 1: DATA TYPE & RANGE VALIDATION ---
    // Age must be a number between 0 and 120 (realistic human lifespan).
    // isCitizen and isRegistered must be boolean (true/false) only.
    if (
        typeof age !== 'number' || age < 0 || age > 120 ||
        typeof isCitizen !== 'boolean' ||
        typeof isRegistered !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: PRIMARY ELIGIBILITY (LAW) ---
    // According to law, a person must be both 18+ and a legal citizen.
    // If either of these fails, they are fundamentally "Not Eligible".
    if (age < 18 || !isCitizen) {
        return "Not Eligible";
    }

    // --- STEP 3: SECONDARY VERIFICATION (ADMINISTRATION) ---
    // Even if they are 18 and a citizen, they must be registered in the voter list.
    // If not registered, we provide a specific status to guide them.
    if (!isRegistered) {
        return "Registration Required";
    }

    // --- STEP 4: SUCCESS ---
    // If all filters are passed, access is granted.
    return "Eligible";
}

// --- EXAMPLE USAGE ---
console.log(isEligibleToVote(20, true, false));
console.log(isEligibleToVote(-5, true, true));
console.log(isEligibleToVote(16, true, true));
console.log(isEligibleToVote(20, true, true));