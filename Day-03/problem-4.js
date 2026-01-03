function mergeUniqueArrays(arr1, arr2) {
    // Rule 1: Check if both inputs are arrays → "Invalid Input"
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid Input";

    const result = [];

    // Combine arrays
    const combined = arr1.concat(arr2);

    // Rule 2: Preserve first occurrence only
    for (let i = 0; i < combined.length; i++) {
        if (!result.includes(combined[i])) {
            result.push(combined[i]);
        }
    }

    // Rule 3: Return empty array if both arrays empty or no valid values (handled by loop)
    return result;
}

// Example usage
console.log(mergeUniqueArrays([1, 2, 3], [2, 3, 4]));
console.log(mergeUniqueArrays(["a", "b"], ["b", "c"]));
console.log(mergeUniqueArrays([], []));
console.log(mergeUniqueArrays("not an array", [1, 2]));