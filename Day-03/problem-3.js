function countVowels(str) {
    // Rule 1: Check if input is a string → "Invalid Input"
    if (typeof str !== "string") return "Invalid Input";

    const vowels = "aeiouAEIOU"; // Rule 2: Count a, e, i, o, u (upper & lower)
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        // Rule 3: Ignore non-alphabetic characters automatically
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    // Rule 4: Return 0 if no vowels found
    return count;
}

// Example usage
console.log(countVowels("JavaScript"));
console.log(countVowels("Hello World!"));
console.log(countVowels("BCDFG"));
console.log(countVowels(12345));