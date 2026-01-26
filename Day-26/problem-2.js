function longestNonRepeatingWindow(events, k) {

    // input validation
    if (!Array.isArray(events) || typeof k !== "number" || k < 0) return "Invalid Input";
    for (let e of events) if (typeof e !== "string") return "Invalid Input";
    if (k === 0) return 0; // special case: no app allowed

    let left = 0; // left pointer of sliding window
    let maxLen = 0; // maximum window length
    const freq = {}; // frequency map for apps in current window

    for (let right = 0; right < events.length; right++) {
        const app = events[right];
        freq[app] = (freq[app] || 0) + 1; // increase count of current app

        // STEP 1: Shrink window from left until no app exceeds k
        while (freq[app] > k) {
            freq[events[left]]--; // decrease count of app leaving window
            left++; // move window start forward
        }

        // STEP 2: Update maximum window length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Example Usage:
console.log("Example Output:", longestNonRepeatingWindow([
    "Facebook",
    "YouTube",
    "Facebook",
    "Instagram",
    "YouTube",
    "Facebook",
    "Twitter",
    "Instagram",
    "WhatsApp",
    "Facebook"
], 2));