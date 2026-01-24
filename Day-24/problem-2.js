function topKFrequent(nums, k) {

    // Input validation
    if (!Array.isArray(nums) || typeof k !== "number" || k <= 0) return "Invalid Input";

    // Count frequency of each number using Map
    const freqMap = new Map();
    for (let n of nums) {
        if (typeof n !== "number") return "Invalid Input";
        freqMap.set(n, (freqMap.get(n) || 0) + 1); // Increment frequency
    }

    if (k > freqMap.size) return "Invalid Input"; // Can't ask for more than unique elements

    // Convert map to array of [num, freq] pairs and sort by freq descending
    const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

    // Take top k elements and return only the numbers
    return sorted.slice(0, k).map(item => item[0]);
}

// Example
console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 4], 2));