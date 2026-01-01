
function countEvens(arr) {

    // Verify that the input is an array
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }

    let count = 0;

    // Iterate through the array and count even numbers (ignore non-numbers)
    for (let item of arr) {
        if (typeof item === 'number' && item % 2 === 0) {
            count++;
        }
    }

    return count;
}


console.log(countEvens([1, 2, 3, 4, 6]));
console.log(countEvens([10, 15, 20, "a", 30]));
console.log(countEvens([]));
console.log(countEvens("not an array"));