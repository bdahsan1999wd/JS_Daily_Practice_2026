function longestStableTraffic(visits, k) {

    // Validate input
    if (!Array.isArray(visits) || typeof k !== "number" || k < 0) return "Invalid Input";
    for (let v of visits) if (typeof v !== "number") return "Invalid Input";

    let maxQueue = [], minQueue = []; // Monotonic queues to track max and min in window
    let left = 0, maxLen = 0;

    for (let right = 0; right < visits.length; right++) {
        let val = visits[right];

        // Maintain decreasing maxQueue (front always largest)
        while (maxQueue.length && visits[maxQueue[maxQueue.length - 1]] < val) maxQueue.pop();
        maxQueue.push(right);

        // Maintain increasing minQueue (front always smallest)
        while (minQueue.length && visits[minQueue[minQueue.length - 1]] > val) minQueue.pop();
        minQueue.push(right);

        // Shrink window if difference between max and min > k
        while (visits[maxQueue[0]] - visits[minQueue[0]] > k) {
            left++;
            if (maxQueue[0] < left) maxQueue.shift();
            if (minQueue[0] < left) minQueue.shift();
        }

        // Update maximum length of stable period
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Example Usage
console.log(longestStableTraffic([10, 12, 11, 14, 13, 15, 10], 3));