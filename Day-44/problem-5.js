/**
 * 🧩 PROBLEM–05: 🏆 Election Winner Proclaimer

 * Logic: Analyzes a collection of candidate results to find the highest score and detect ties.
 */

function getWinner(results) {

    // --- STEP 1: OBJECT VALIDATION ---
    // Ensure results is an object, not null, and not an array.
    if (typeof results !== 'object' || results === null || Array.isArray(results)) {
        return "Invalid Input";
    }

    // Convert the object into an array of [key, value] pairs for easier iteration.
    const entries = Object.entries(results);
    if (entries.length === 0) return "Invalid Input"; // Handle empty results object.

    let maxVotes = -1;     // Tracks the highest number of votes found so far.
    let winnerName = "";   // Stores the name of the current leader.
    let isDraw = false;    // A flag to keep track of ties at the top position.

    // --- STEP 2: ITERATIVE ANALYSIS ---
    for (const [name, count] of entries) {
        // Validation: Every vote count must be a non-negative number.
        if (typeof count !== 'number' || count < 0) return "Invalid Input";

        if (count > maxVotes) {
            // Case A: Found a new undisputed leader.
            maxVotes = count;
            winnerName = name;
            isDraw = false; // Reset draw flag since this person is now in the lead alone.
        } else if (count === maxVotes) {
            // Case B: Another candidate has reached the same maximum vote count.
            isDraw = true;  // Mark that there is currently a tie for 1st place.
        }
    }

    // --- STEP 3: FINAL ANNOUNCEMENT ---
    // If the isDraw flag is true, it means at least two people share the top spot.
    return isDraw ? "Draw" : `Winner: ${winnerName}`;
}

// --- EXAMPLE USAGE ---
console.log(getWinner({ "Rahim": 50, "Karim": 80, "Sonia": 80 }));
console.log(getWinner({ "Rahim": 100, "Karim": "80"}));
console.log(getWinner({ "Rahim": 120, "Karim": 90 }));