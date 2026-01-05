function validateUserProfile(profile) {
    // Rule 1: Check if input is object
    if (typeof profile !== "object" || profile === null) return "Invalid Input";

    // Rule 2: Check required fields
    if (
        typeof profile.name === "string" && profile.name.trim().length >= 3 &&
        typeof profile.email === "string" && profile.email.includes("@") && profile.email.includes(".") &&
        typeof profile.age === "number" && profile.age >= 18
    ) {
        return true;
    }

    return false;
}

// Example usage
console.log(validateUserProfile({
    name: "Ahsan",
    email: "ahsan@gmail.com",
    age: 22,
}));

console.log(validateUserProfile({
    name: "Al",
    email: "algmail.com",
    age: 16,
}));

console.log(validateUserProfile("user"));