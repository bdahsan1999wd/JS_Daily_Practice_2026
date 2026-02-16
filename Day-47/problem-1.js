/**
 * 🗳️ PROBLEM–01: auditVotes()

 * Separates numerical validation from turnout categorization.
 */

function auditVotes(totalVotes, castedVotes) {

    // --- STEP 1: NUMERICAL VALIDATION ---
    // Inputs must be numbers, totalVotes must be greater than 0 (no division by zero),
    // and castedVotes cannot exceed the total.
    if (
        typeof totalVotes !== 'number' ||
        typeof castedVotes !== 'number' ||
        totalVotes <= 0 ||
        castedVotes < 0 ||
        castedVotes > totalVotes
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: BUSINESS LOGIC (TURNOUT CALCULATION) ---
    const turnoutPercent = (castedVotes / totalVotes) * 100;

    // --- STEP 3: CATEGORIZATION ---
    if (turnoutPercent > 80) {
        return "High Turnout";
    } else if (turnoutPercent >= 50) {
        return "Moderate Turnout";
    } else {
        return "Low Turnout";
    }
}

// --- EXAMPLE USAGE ---
console.log(auditVotes(1000, 900));
console.log(auditVotes(1000, 400));
console.log(auditVotes(100, 150));