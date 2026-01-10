function processTransactions(balance, transactions) {

    // Rule 1: Input validation

    if (typeof balance !== "number" || !Array.isArray(transactions)) return "Invalid Input";

    // Initialize counters

    let successCount = 0;

    let failedCount = 0;

    // Step 1: Process each transaction sequentially

    for (let tx of transactions) {

        // Rule 2: Valid transaction check

        if (

            tx &&

            (tx.type === "deposit" || tx.type === "withdraw") &&

            typeof tx.amount === "number" &&

            tx.amount > 0

        ) {

            if (tx.type === "deposit") {

                // Deposit: simply add

                balance += tx.amount;

                successCount++;

            } else if (tx.type === "withdraw") {

                // Withdraw: check if enough balance

                if (tx.amount <= balance) {

                    balance -= tx.amount;

                    successCount++;

                } else {

                    failedCount++; // insufficient balance → ignored

                }

            }

        } else {

            // Invalid transaction format

            failedCount++;

        }

    }

    // Step 2: Return final result object

    return {

        finalBalance: balance,

        successCount: successCount,

        failedCount: failedCount

    };

}

// Example Usage

console.log(processTransactions(1000, [

    { type: "deposit", amount: 500 },

    { type: "withdraw", amount: 300 },

    { type: "withdraw", amount: 1500 },

    { type: "deposit", amount: 200 },

]));