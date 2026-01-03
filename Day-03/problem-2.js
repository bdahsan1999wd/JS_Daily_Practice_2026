function filterEvenNumbers(arr) {
    // Rule 1: Check if input is an array → "Invalid Input"
    if (!Array.isArray(arr)) return "Invalid Input";

    const result = [];

    // Loop through array
    for (let i = 0; i < arr.length; i++) {
        // Rule 2: Ignore non-number values
        // Rule 3: Keep only even numbers
        if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    // Rule 4: Return empty array if no even numbers found
    return result;
}

// Example usage
console.log(filterEvenNumbers([1, 2, 3, 4, "a", 6]));
console.log(filterEvenNumbers([1, 3, 5]));
console.log(filterEvenNumbers("not an array"));