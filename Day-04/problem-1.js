function secondLargest(arr) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(arr)) return "Invalid Input";

    // Filter valid numbers and remove duplicates
    const nums = [...new Set(arr.filter(el => typeof el === "number"))];

    // Rule 3: If fewer than 2 unique numbers → "Not Applicable"
    if (nums.length < 2) return "Not Applicable";

    // Sort numbers descending and return second element
    nums.sort((a, b) => b - a);
    return nums[1];
}

// Example usage
console.log(secondLargest([10, 20, 30, 40]));
console.log(secondLargest([5, 5, 5]));
console.log(secondLargest([1, "a", 2]));
console.log(secondLargest("array"));