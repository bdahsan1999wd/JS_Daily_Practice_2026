function countWords(sentence) {
    // Rule 1: If input is not a string, return "Invalid Input"
    if (typeof sentence !== "string") return "Invalid Input";

    // Rule 2: Split sentence by spaces and remove extra/empty parts
    const words = sentence.split(" ").filter(function (part) {
        return part !== ""; // Ignore empty strings caused by extra spaces
    });

    // Return the total number of words
    return words.length;
}


console.log(countWords("I love JavaScript very much"));
console.log(countWords("   Learn   JS   Daily  "));
console.log(countWords(12345));
console.log(countWords("     "));