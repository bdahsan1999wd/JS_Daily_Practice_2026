/**
 * 🧩 PROBLEM–03: 🏛️ Parliamentary Seat Allocation

 * Logic: Implements a "Threshold System" where only parties with significant support get seats.
 */

function allocateSeats(votePercentage, totalSeats) {

    // --- STEP 1: PARAMETER VALIDATION ---
    // votePercentage cannot be more than 100 or less than 0.
    // totalSeats must be a positive integer (can't have negative or zero seats in parliament).
    if (
        typeof votePercentage !== 'number' || votePercentage < 0 || votePercentage > 100 ||
        typeof totalSeats !== 'number' || totalSeats < 1 || totalSeats > 1000
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: MINIMUM THRESHOLD RULE ---
    // This rule prevents tiny parties from cluttering the parliament.
    // If a party has < 5% of total votes, they are disqualified from seat allocation.
    if (votePercentage < 5) {
        return 0;
    }

    // --- STEP 3: PROPORTIONAL CALCULATION ---
    // calculate the raw seat number: (Percentage / 100) * Total available seats.
    // Math.floor is used because you cannot have a fraction of a seat (e.g., 3.7 seats).
    return Math.floor((votePercentage / 100) * totalSeats);
}

// --- EXAMPLE USAGE ---
console.log(allocateSeats(12, 300));
console.log(allocateSeats(105, 300));
console.log(allocateSeats(4.9, 300));
console.log(allocateSeats(67, 300));