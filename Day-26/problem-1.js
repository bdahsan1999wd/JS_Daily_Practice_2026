function maxConcurrentUsers(sessions) {

    // input validation
    if (!Array.isArray(sessions)) return "Invalid Input";
    for (let s of sessions) {
        if (!Array.isArray(s) || s.length !== 2) return "Invalid Input";
        if (typeof s[0] !== "number" || typeof s[1] !== "number") return "Invalid Input";
        if (s[0] >= s[1]) return "Invalid Input"; // start must be < end
    }
    if (sessions.length === 0) return 0; // edge case: no sessions

    // STEP 1: Separate all start times and end times
    const starts = sessions.map(s => s[0]).sort((a, b) => a - b); // sorted start times
    const ends = sessions.map(s => s[1]).sort((a, b) => a - b);   // sorted end times

    let maxUsers = 0; // max concurrent users seen so far
    let current = 0;  // current users watching
    let i = 0, j = 0; // pointers for start and end arrays

    // STEP 2: Sweep line technique
    // Move through starts and ends in sorted order
    while (i < starts.length) {
        if (starts[i] < ends[j]) {
            // New user starts before earliest ending session ends
            current++; // increase current concurrent users
            maxUsers = Math.max(maxUsers, current); // update maximum if needed
            i++; // move to next start
        } else {
            // A user has stopped watching
            current--; // decrease current concurrent users
            j++; // move to next end
        }
    }

    return maxUsers;
}

// Example Usage:
console.log("Example Output:", maxConcurrentUsers([[1, 4], [2, 5], [7, 9], [3, 6], [5, 8]]));