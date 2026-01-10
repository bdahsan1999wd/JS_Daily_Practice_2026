function processTransactions(balance, transactions) {
    // Rule 1: Validate inputs
    if (typeof balance !== "number" || !Array.isArray(transactions)) return "Invalid Input";

    let successCount = 0;
    let failedCount = 0;

    for (let tx of transactions) {
        // Rule 2: Check valid transaction
        if (tx && (tx.type === "deposit" || tx.type === "withdraw") && typeof tx.amount === "number" && tx.amount > 0) {
            if (tx.type === "withdraw") {
                if (tx.amount <= balance) { // Rule: withdraw cannot exceed balance
                    balance -= tx.amount;
                    successCount++;
                } else {
                    failedCount++; // ignored transaction
                }
            } else if (tx.type === "deposit") {
                balance += tx.amount;
                successCount++;
            }
        } else {
            failedCount++; // invalid transaction
        }
    }

    return {
        finalBalance: balance,
        successCount,
        failedCount
    };
}

// Example Usage
console.log(processTransactions(1000, [
    { type: "deposit", amount: 500 },
    { type: "withdraw", amount: 300 },
    { type: "withdraw", amount: 1500 },
    { type: "deposit", amount: 200 },
]));