function bankTransactionEngine(accounts, transactions) {

    // --- Input Validation ---
    // Rule: accounts must be an object (not array), transactions must be array
    if (typeof accounts !== "object" || Array.isArray(accounts) || !Array.isArray(transactions)) return "Invalid Input";

    // Validate accounts: each value must be number, no duplicate account names
    const accountNames = new Set();
    for (const acc in accounts) {
        if (typeof accounts[acc] !== "number") return "Invalid Input";
        if (accountNames.has(acc)) return "Invalid Input"; // Rule: no duplicate accounts
        accountNames.add(acc);
    }

    let success = 0;
    let failed = 0;
    const failedTransactions = [];

    // --- Process Transactions ---
    for (const t of transactions) {
        // Rule: Transaction validation
        if (!t.from || !t.to || typeof t.amount !== "number") return "Invalid Input";
        if (!accounts.hasOwnProperty(t.from) || !accounts.hasOwnProperty(t.to)) return "Invalid Input";

        // --- Partial Rollback Logic ---
        // Rule: No negative balance allowed; rollback failed transaction only
        if (accounts[t.from] >= t.amount) {
            accounts[t.from] -= t.amount; // debit
            accounts[t.to] += t.amount;   // credit
            success++; // Transaction successful
        } else {
            failed++; // Transaction failed
            failedTransactions.push({ ...t }); // Record failed transaction
        }
    }

    // --- Return Result ---
    return {
        finalBalances: accounts,
        success,
        failed,
        failedTransactions
    };
}

// --- Example Usage ---
const bankResult = bankTransactionEngine(
    { Ahsan: 500, Karim: 300 },
    [
        { from: "Ahsan", to: "Karim", amount: 200 },
        { from: "Karim", to: "Ahsan", amount: 500 },
        { from: "Karim", to: "Ahsan", amount: 300 }
    ]
);

console.log(bankResult);