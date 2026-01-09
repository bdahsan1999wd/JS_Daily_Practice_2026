function analyzeUserActivity(logs) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(logs)) return "Invalid Input";

    const result = {}; // store total actions per user

    for (let log of logs) {
        // Rule 2: Validate record (user:string, action:string)
        if (log && typeof log.user === "string" && typeof log.action === "string") {
            result[log.user] = (result[log.user] || 0) + 1; // Rule 3: count actions
        }
    }

    return result; // Rule 5: Return object
}

// Example Usage
console.log(analyzeUserActivity([
    { user: "Ahsan", action: "login" },
    { user: "Ahsan", action: "logout" },
    { user: "Karim", action: "login" },
    { user: "Ahsan", action: "login" },
]));