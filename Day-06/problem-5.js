function extractValidEmails(users) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(users)) return "Invalid Input";

    const emails = [];

    // Loop through users
    for (let user of users) {
        // Rule 2: A valid email must be string and include @ and .
        if (
            user &&
            typeof user.email === "string" &&
            user.email.includes("@") &&
            user.email.includes(".")
        ) {
            emails.push(user.email); // Rule 3: Add only valid emails
        }
    }

    // Rule 4: If none valid, emails will be empty array
    return emails;
}

// Example Usage
console.log(extractValidEmails([
    { name: "Ahsan", email: "ahsan@gmail.com" },
    { name: "Test", email: "testgmail.com" },
    { name: "Karim", email: "karim@yahoo.com" },
]));

console.log(extractValidEmails("users"));