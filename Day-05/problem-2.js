function mostFrequentWord(sentence) {
    // Rule 1: Check if input is string
    if (typeof sentence !== "string") return "Invalid Input";

    // Remove punctuation and lowercase
    const words = sentence.replace(/[^\w\s]/g, "").toLowerCase().split(/\s+/).filter(Boolean);

    if (words.length === 0) return ""; // Rule 5: Empty sentence

    const freq = {};
    let maxCount = 0;
    let mostFreq = "";

    // Count word frequencies
    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
        if (freq[word] > maxCount) {
            maxCount = freq[word];
            mostFreq = word; // Rule 4: first word with highest frequency
        }
    }

    return mostFreq;
}

// Example usage
console.log(mostFrequentWord("I love JS and I love coding"));
console.log(mostFrequentWord("Hello hello world"));
console.log(mostFrequentWord(""));
console.log(mostFrequentWord(123));