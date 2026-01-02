function sumPositiveNumbers(arr) {
    // Validate input: must be an array
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }

    let sum = 0;

    // Loop through array
    for (let item of arr) {
        // Check if item is a number and positive
        if (typeof item === "number" && item > 0) {
            sum += item;
        }
    }

    return sum;
}


console.log(sumPositiveNumbers([1, -2, 3, 4, "5"]));
console.log(sumPositiveNumbers([-1, -5, 0]));
console.log(sumPositiveNumbers("not an array"));