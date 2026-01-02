function removeFalsy(arr) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(arr)) return "Invalid Input";

    // Initialize a new array to store truthy values
    const result = [];

    // Loop through each item in the array
    for (let i = 0; i < arr.length; i++) {
        // Rule 2: Only keep truthy values (ignore false, 0, "", null, undefined, NaN)
        if (arr[i]) {
            result.push(arr[i]);
        }
    }

    // Return new array without falsy values
    return result;
}


console.log(removeFalsy([0, 1, false, 2, "", 3]));
console.log(removeFalsy([null, undefined, "JS", NaN]));
console.log(removeFalsy("array"));
console.log(removeFalsy([false, 0, "", null, undefined, NaN]));