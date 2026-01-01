function findMax(arr) {

    // Ensure the input is an array
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }

    // Return "No Data" if the array is empty
    if (arr.length === 0) {
        return "No Data";
    }

    let max = null;

    // Iterate through the array to find the maximum number
    for (let item of arr) {
        if (typeof item === 'number') {
            if (max === null || item > max) {
                max = item;
            }
        }
    }

    // If array had no numbers
    if (max === null) {
        return "No Data";
    }

    return max;
}


console.log(findMax([10, 25, 5, 40]));
console.log(findMax([-10, -5, -2]));
console.log(findMax([1, "a", null, 3]));
console.log(findMax([]));
console.log(findMax("not an array"));