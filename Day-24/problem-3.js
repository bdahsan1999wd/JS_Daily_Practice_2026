function longestKDistinct(nums, k) {

    // Input validation
    if (!Array.isArray(nums) || typeof k !== "number" || k < 0) return "Invalid Input";
    if (k === 0) return 0; // No distinct numbers allowed → length 0

    let left = 0, maxLen = 0;
    const count = new Map(); // Track count of each number in current window

    for (let right = 0; right < nums.length; right++) {
        let num = nums[right];
        if (typeof num !== "number") return "Invalid Input";

        count.set(num, (count.get(num) || 0) + 1); // Add current number to window

        // Shrink window until at most K distinct numbers
        while (count.size > k) {
            let leftNum = nums[left];
            count.set(leftNum, count.get(leftNum) - 1); // Reduce count of leftmost
            if (count.get(leftNum) === 0) count.delete(leftNum); // Remove if count 0
            left++; // Move window forward
        }

        maxLen = Math.max(maxLen, right - left + 1); // Update max length
    }

    return maxLen;
}

// Example
console.log(longestKDistinct([1, 2, 1, 2, 3, 3, 4, 5], 2));