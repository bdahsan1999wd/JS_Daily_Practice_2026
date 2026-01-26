function longestOrderBurst(orders, limit) {

    // Input validation
    if (!Array.isArray(orders) || typeof limit !== "number" || limit < 0) return "Invalid Input";
    for (let o of orders) if (typeof o !== "number") return "Invalid Input";

    let left = 0; // left pointer of sliding window start
    let maxLen = 0; // longest valid window length
    const maxQueue = []; // stores indexes of elements in decreasing order (for max)
    const minQueue = []; // stores indexes of elements in increasing order (for min)

    for (let right = 0; right < orders.length; right++) {
        // Maintain decreasing maxQueue
        while (maxQueue.length && orders[right] > orders[maxQueue[maxQueue.length - 1]]) maxQueue.pop();
        maxQueue.push(right);

        // Maintain increasing minQueue
        while (minQueue.length && orders[right] < orders[minQueue[minQueue.length - 1]]) minQueue.pop();
        minQueue.push(right);

        // Shrink window from left if difference exceeds limit
        while (orders[maxQueue[0]] - orders[minQueue[0]] > limit) {
            left++; // move window start forward
            if (maxQueue[0] < left) maxQueue.shift(); // remove outdated index
            if (minQueue[0] < left) minQueue.shift(); // remove outdated index
        }

        // Update maximum valid window length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Example Usage:
console.log(longestOrderBurst([3, 5, 2, 6, 4, 7, 3, 5, 4], 3));