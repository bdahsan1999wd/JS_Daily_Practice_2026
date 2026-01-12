function processRecharges(totalBalance, requests) {

    // Rule 1: Validate input
    if (typeof totalBalance !== "number" || !Array.isArray(requests)) {
        return "Invalid Input";
    }

    // Step 1: Initialize result containers
    const successful = [];
    const failed = [];
    let remainingBalance = totalBalance;

    // Step 2: Process each request one by one
    for (let req of requests) {

        // Rule 2: Validate each request
        if (
            req &&
            typeof req.user === "string" &&
            typeof req.amount === "number" &&
            req.amount > 0
        ) {

            // Rule 3: Check if enough balance exists
            if (req.amount <= remainingBalance) {
                successful.push(req.user);
                remainingBalance -= req.amount; // update state
            } else {
                failed.push(req.user);
            }
        }
    }

    // Step 3: Return final result
    return {
        successful,
        failed,
        remainingBalance
    };
}

// Example Usage
console.log(processRecharges(100, [
    { user: "Ahsan", amount: 30 },
    { user: "Karim", amount: 50 },
    { user: "Rahim", amount: 40 },
]));