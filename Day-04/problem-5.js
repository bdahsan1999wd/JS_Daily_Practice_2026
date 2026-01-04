function groupEvenOdd(arr) {
    // Rule 1: Check if input is array
    if (!Array.isArray(arr)) return "Invalid Input";

    const result = { even: [], odd: [] };

    // Loop through array and separate even/odd numbers
    for (let el of arr) {
        if (typeof el === "number") {
            if (el % 2 === 0) result.even.push(el);
            else result.odd.push(el);
        }
    }

    return result;
}

// Example usage
console.log(groupEvenOdd([1, 2, 3, 4, 5]));
console.log(groupEvenOdd([10, "a", 7, null]));
console.log(groupEvenOdd([1, 3, 5]));
console.log(groupEvenOdd("array"));