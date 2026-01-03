function shortestWord(sentence) {
    // Rule 1: Check if input is a string
    if (typeof sentence !== "string") return "Invalid Input";

    // Rule 2: Remove punctuation using regex
    // [^\w\s] → word character (letters & numbers) এবং space ছাড়া সব remove করবে
    const cleaned = sentence.replace(/[^\w\s]/g, "");

    // Rule 3: Split words and remove empty entries
    const words = cleaned.trim().split(/\s+/);
    if (words.length === 0 || words[0] === "") return "";

    // Rule 4: Find the shortest word
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    // Return the shortest word
    return shortest;
}

// Example usage
console.log(shortestWord("I love JavaScript"));
console.log(shortestWord("Find the shortest word"));
console.log(shortestWord(""));
console.log(shortestWord(12345));
console.log(shortestWord("Wow!!! Amazing, isn't it?"));