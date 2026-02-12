/**
 * 🧩 PROBLEM–01: 🗳️ Election Result Tally

 * Logic: An automated system to filter and count valid votes for candidates A, B, and C.
 */

function countVotes(votes) {

    // --- STEP 1: INPUT VALIDATION ---
    // Check if the input is an array (not a number or string).
    // Ensure the array is not empty and every element inside is a string data type.
    if (!Array.isArray(votes) || votes.length === 0 || !votes.every(v => typeof v === "string")) {
        return "Invalid Input";
    }

    // --- STEP 2: INITIALIZE DATA STRUCTURE ---
    // create a fixed object with initial counts of 0.
    // This ensures even if a candidate gets zero votes, they are represented in the final result.
    const tally = { "A": 0, "B": 0, "C": 0 };

    // --- STEP 3: VOTE PROCESSING ---
    // Loop through each vote in the array.
    for (let vote of votes) {
        // hasOwnProperty checks if the vote string matches our valid keys ("A", "B", or "C").
        // This effectively ignores any "spoilt" or "invalid" votes like "D" or "X".
        if (tally.hasOwnProperty(vote)) {
            tally[vote]++; // Increment the count for that specific candidate.
        }
    }

    return tally;
}

// --- EXAMPLE USAGE ---
console.log(countVotes(["A", "B", "A", "C", "D"]));
console.log(countVotes(123));