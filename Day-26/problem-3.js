function maxActiveRides(trips) {

    // input validation
    if (!Array.isArray(trips)) return "Invalid Input";
    for (let t of trips) {
        if (!Array.isArray(t) || t.length !== 2) return "Invalid Input";
        if (typeof t[0] !== "number" || typeof t[1] !== "number") return "Invalid Input";
        if (t[0] >= t[1]) return "Invalid Input"; // start must be < end
    }
    if (trips.length === 0) return 0; // edge case: no rides

    // STEP 1: Separate start and end times and sort them
    const starts = trips.map(t => t[0]).sort((a, b) => a - b);
    const ends = trips.map(t => t[1]).sort((a, b) => a - b);

    let current = 0; // number of active rides currently
    let maxRides = 0; // maximum active rides seen so far
    let i = 0, j = 0; // pointers for starts and ends

    // STEP 2: Sweep line algorithm to count overlapping rides
    while (i < starts.length) {
        if (starts[i] < ends[j]) {
            // A new ride starts before the earliest ending ride ends
            current++; // increment active rides
            maxRides = Math.max(maxRides, current); // update max if needed
            i++; // move to next start
        } else {
            // A ride has ended
            current--; // decrement active rides
            j++; // move to next end
        }
    }

    return maxRides;
}

// Example Usage:
console.log(maxActiveRides([
    [1, 5],
    [2, 6],
    [4, 8],
    [7, 9],
    [3, 4]
]));