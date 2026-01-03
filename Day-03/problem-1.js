function averageNumbers(arr) {
    // Rule 1: Check if input is an array → "Invalid Input"
    if (!Array.isArray(arr)) return "Invalid Input";

    let sum = 0;
    let count = 0;

    // Loop through array to find valid positive numbers
    for (let i = 0; i < arr.length; i++) {
        // Rule 2 & 3: Ignore non-number values and ignore negative numbers & zero
        if (typeof arr[i] === "number" && arr[i] > 0) {
            sum += arr[i];
            count++;
        }
    }

    // Rule 4: If no valid numbers exist → return 0
    return count > 0 ? sum / count : 0;
}

// Example usage
console.log(averageNumbers([10, 20, 30]));
console.log(averageNumbers([10, "a", -5, 20]));
console.log(averageNumbers([]));
console.log(averageNumbers("array"));