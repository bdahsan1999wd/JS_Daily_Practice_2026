function longestClickSpike(clicks, minClicks) {
    
    // ===============================
    // STEP 0: Input Validation
    // ===============================

    // clicks must be an array
    // minClicks must be a non-negative number
    if (!Array.isArray(clicks) || typeof minClicks !== "number" || minClicks < 0) {
        return "Invalid Input";
    }

    // Each element in clicks must be a number
    for (let c of clicks) {
        if (typeof c !== "number") return "Invalid Input";
    }

    // ===============================
    // STEP 1: Initialize variables
    // ===============================
    let maxLen = 0;      // Longest contiguous period with clicks >= minClicks
    let currentLen = 0;  // Current length of ongoing period

    // ===============================
    // STEP 2: Traverse the clicks array
    // ===============================
    for (let c of clicks) {
        if (c >= minClicks) {
            // Click count meets threshold → increment current period
            currentLen++;
            // Update maxLen if current period is longer
            maxLen = Math.max(maxLen, currentLen);
        } else {
            // Click count below threshold → reset current period
            currentLen = 0;
        }
    }

    // ===============================
    // STEP 3: Return the longest period
    // ===============================
    return maxLen;
}

// ===============================
// Example Usage
// ===============================
console.log("Example Output:", longestClickSpike([10, 15, 20, 5, 7, 25, 30], 15));