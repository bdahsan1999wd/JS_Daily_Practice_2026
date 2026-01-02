function longestWord(sentence) {
    // Rule 1: Check if input is a string
    if (typeof sentence !== "string") return "Invalid Input";

    // Trim sentence to remove extra spaces
    sentence = sentence.trim();

    // Rule 2: If sentence is empty after trimming, return ""
    if (sentence === "") return "";

    // Split sentence by spaces into words
    const words = sentence.split(" ");

    // Initialize variable to keep track of the longest word
    let longest = "";

    // Loop through each word
    for (let i = 0; i < words.length; i++) {
        // Ignore empty strings caused by extra spaces
        if (words[i] !== "" && words[i].length > longest.length) {
            longest = words[i];
        }
    }

    // Return the longest word
    return longest;
}


console.log(longestWord("I am learning programming"));
console.log(longestWord(""));
console.log(longestWord(100));
console.log(longestWord("   Find    the   longest   word   "));