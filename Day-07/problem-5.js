function extractPhoneNumbers(users) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(users)) return "Invalid Input";

    let result = [];

    // Loop through each user
    for (let item of users) {
        // Rule 2: phone must be string and length 11
        if (
            item &&
            typeof item.phone === "string" &&
            item.phone.length === 11
        ) {
            result.push(item.phone);
        }
    }

    // Rule 4: If none valid, result will be []
    return result;
}

// Example Usage
console.log(extractPhoneNumbers([
    { name: "Ahsan", phone: "01712345678" },
    { name: "Test", phone: 12345 },
    { name: "Karim", phone: "01987654321" },
]));

console.log(extractPhoneNumbers("users"));