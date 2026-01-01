function reverseString(str) {

    // Check if the input is a string
    if (typeof str !== 'string') {
        return "Invalid Input";
    }

    let reversed = "";

    // Reverse the string by iterating from the end
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}


console.log(reverseString("Ahsan"));
console.log(reverseString("Hello123"));
console.log(reverseString("JavaScript"));
console.log(reverseString(12345));