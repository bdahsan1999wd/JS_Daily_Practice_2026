function findMostFrequentProduct(arr) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(arr)) return "Invalid Input";

    let freq = {};
    let maxCount = 0;
    let mostFrequent = "";

    // Loop through each item
    for (let item of arr) {
        // Rule 2: Only count string values
        if (typeof item === "string") {
            // Rule 3: Count frequency
            if (freq[item]) {
                freq[item]++;
            } else {
                freq[item] = 1;
            }

            // Rule 4: Find highest frequency
            if (freq[item] > maxCount) {
                maxCount = freq[item];
                mostFrequent = item;
            }
        }
    }

    // Rule 5 & 6: If no valid string, return ""
    return mostFrequent;
}

// Example Usage
console.log(findMostFrequentProduct([
    "Laptop",
    "Mouse",
    "Mouse",
    "Keyboard",
    "Mouse",
    "Laptop"
]));

console.log(findMostFrequentProduct("products"));