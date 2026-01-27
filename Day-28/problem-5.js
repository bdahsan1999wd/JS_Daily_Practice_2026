function detectFraud(transactions) {

    // -------------------------
    // Step 1: Input Validation
    // -------------------------
    // - transactions must be an array
    // - each transaction must have positive amount & time
    if (
        !Array.isArray(transactions) ||
        transactions.some((t) => t.amount <= 0 || t.time <= 0)
    ) {
        return "Invalid Input";
    }

    // -------------------------
    // Step 2: Setup storage
    // -------------------------
    let flaggedUsers = new Set();          // Unique users flagged
    let flaggedTransactions = new Set();   // Unique transaction indices flagged

    // Group transactions by userId for per-user analysis
    const userMap = {};
    transactions.forEach((t, idx) => {
        if (!userMap[t.userId]) userMap[t.userId] = [];
        userMap[t.userId].push({ ...t, idx }); // Add index for tracking
    });

    // -------------------------
    // Step 3: Analyze each user
    // -------------------------
    for (let user in userMap) {
        const txs = userMap[user].sort((a, b) => a.time - b.time); // Sort by time

        // ---------- Rule 1: More than 3 transactions in 10 minutes ----------
        let i = 0; // start of sliding window
        for (let j = 0; j < txs.length; j++) {
            // Shrink window if outside 10-minute range
            while (txs[j].time - txs[i].time > 10) i++;

            // If window has more than 3 transactions → flag
            if (j - i + 1 > 3) {
                flaggedUsers.add(user);
                for (let k = i; k <= j; k++) flaggedTransactions.add(txs[k].idx);
            }
        }

        // ---------- Rule 2: Total amount > 100000 in 60 minutes ----------
        i = 0; // reset window start
        let sum = 0; // sum of amounts in window
        for (let j = 0; j < txs.length; j++) {
            sum += txs[j].amount;

            // Shrink window if outside 60-minute range
            while (txs[j].time - txs[i].time > 60) {
                sum -= txs[i].amount;
                i++;
            }

            // If sum exceeds 100000 → flag
            if (sum > 100000) {
                flaggedUsers.add(user);
                for (let k = i; k <= j; k++) flaggedTransactions.add(txs[k].idx);
            }
        }
    }

    // -------------------------
    // Step 4: Return results
    // -------------------------
    return {
        flaggedUsers: Array.from(flaggedUsers),
        flaggedTransactions: Array.from(flaggedTransactions).sort((a, b) => a - b),
    };
}

// -------------------------
// Example Usage
// -------------------------
console.log(
    detectFraud([
        { userId: "U1", amount: 30000, time: 1 },
        { userId: "U1", amount: 30000, time: 5 },
        { userId: "U1", amount: 30000, time: 9 },
        { userId: "U1", amount: 30000, time: 15 },
    ])
);