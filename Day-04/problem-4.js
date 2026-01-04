function isStrongPassword(password) {
    // Rule 1: Check if input is string
    if (typeof password !== "string") return "Invalid Input";

    // Rule 2: Length ≥ 8
    if (password.length < 8) return false;

    // Rule 3: At least one uppercase, one lowercase, one number
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    // Rule 4: No spaces
    const hasSpace = /\s/.test(password);

    return hasUpper && hasLower && hasNumber && !hasSpace;
}

// Example usage
console.log(isStrongPassword("Ahsan123"));
console.log(isStrongPassword("password"));
console.log(isStrongPassword("A1a"));
console.log(isStrongPassword("Ahsan 123"));
console.log(isStrongPassword(12345));