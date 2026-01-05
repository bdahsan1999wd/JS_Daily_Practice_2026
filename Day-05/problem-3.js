function validateUser(user) {
    // Rule 1: Check if input is object
    if (typeof user !== "object" || user === null) return "Invalid Input";

    // Rule 2–4: Validate name, email, age
    if (
        typeof user.name === "string" && user.name.trim() !== "" &&
        typeof user.email === "string" && user.email.includes("@") && user.email.includes(".") &&
        typeof user.age === "number" && user.age >= 18
    ) {
        return "Valid User";
    }

    return "Invalid User";
}

// Example usage
console.log(validateUser({ name: "Ahsan", email: "ahsan@gmail.com", age: 22 }));
console.log(validateUser({ name: "", email: "test@gmail.com", age: 20 }));
console.log(validateUser("user"));