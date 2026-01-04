function countOccurrences(arr) {
    // Rule 1: Check if input is array
    if (!Array.isArray(arr)) return "Invalid Input";

    const countObj = {};

    // Loop through array and count valid elements (number/string)
    for (let el of arr) {
        if (typeof el === "number" || typeof el === "string") {
            countObj[el] = (countObj[el] || 0) + 1;
        }
    }

    return countObj;
}

// Example usage
console.log(countOccurrences([1, 2, 2, 3, 1]));
console.log(countOccurrences(["a", "b", "a"]));
console.log(countOccurrences([1, "a", true, null, "a"]));
console.log(countOccurrences("array"));