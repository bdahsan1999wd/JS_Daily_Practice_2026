function capitalizeWords(str) {
    // Rule 1: Check if input is string
    if (typeof str !== "string") return "Invalid Input";

    // Trim extra spaces and split by space
    return str
        .trim()
        .split(/\s+/)
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

// Example usage
console.log(capitalizeWords("i love javascript"));
console.log(capitalizeWords("   learn   js daily "));
console.log(capitalizeWords("hello World"));
console.log(capitalizeWords(123));