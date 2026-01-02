function isValidEmail(email) {
    // Rule 1: Check if input is a string
    if (typeof email !== "string") return "Invalid Input";

    // Find the position of "@" and the last "."
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    // Rule 2 & 3: "@" must exist and come before "." and not at the start
    if (atIndex > 0 && dotIndex > atIndex + 1) {
        return true; // Valid email
    }

    // Otherwise, invalid email
    return false;
}


console.log(isValidEmail("test@gmail.com"));
console.log(isValidEmail("testgmail.com"));
console.log(isValidEmail(123));
console.log(isValidEmail("test@.com"));
console.log(isValidEmail("@test.com"));