function longestStableSession(sessions, maxActive) {

    // ===============================
    // STEP 0: Input Validation
    // ===============================

    // Check if sessions is an array and maxActive is a positive number
    if (!Array.isArray(sessions) || typeof maxActive !== "number" || maxActive <= 0) {
        return "Invalid Input";
    }

    // Validate each session interval
    for (let s of sessions) {
        // Each session must be an array of length 2
        if (!Array.isArray(s) || s.length !== 2) return "Invalid Input";

        // Each element of session must be a number
        if (typeof s[0] !== "number" || typeof s[1] !== "number") return "Invalid Input";

        // Start time must be less than end time
        if (s[0] >= s[1]) return "Invalid Input";
    }

    // ===============================
    // STEP 1: Create events for sweep line
    // ===============================
    // We convert sessions into "events" for easier counting of active sessions
    // Each session generates two events:
    //   1. Start event → when a session begins
    //   2. End event → when a session ends
    const events = [];
    sessions.forEach((s, idx) => {
        events.push({ time: s[0], type: "start", idx }); // session start
        events.push({ time: s[1], type: "end", idx });   // session end
    });

    // Sort events by time
    // If two events have the same time, end event comes before start
    // This ensures we decrease active count before increasing if they coincide
    events.sort((a, b) => a.time - b.time || (a.type === "end" ? -1 : 1));

    // ===============================
    // STEP 2: Sweep line to calculate active sessions over time
    // ===============================
    // We'll traverse the sorted events to keep track of current active sessions
    const activeCounts = []; // store active sessions at each event point
    let currentActive = 0;   // currently active sessions

    for (let e of events) {
        if (e.type === "start") currentActive++; // new session starts
        else currentActive--;                     // session ends

        // Record number of active sessions at this event point
        activeCounts.push(currentActive);
    }

    // ===============================
    // STEP 3: Sliding window to find longest contiguous sequence ≤ maxActive
    // ===============================
    // We now use sliding window on activeCounts to find the longest sequence
    // where active sessions never exceed maxActive
    let maxLen = 0; // maximum valid contiguous length found
    let left = 0;   // left pointer of sliding window

    for (let right = 0; right < activeCounts.length; right++) {
        // If the current active count exceeds maxActive, shrink window from left
        while (activeCounts[right] > maxActive && left <= right) left++;

        // Update maximum length of valid contiguous window
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// ===============================
// Example Usage
// ===============================
console.log("Example Output:", longestStableSession([
    [1, 4],
    [2, 6],
    [5, 8],
    [3, 5]
], 2));