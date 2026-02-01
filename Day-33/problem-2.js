// PROBLEM–02: 🏧 Smart ATM Withdrawal Validator

// Goal: Validate bank withdrawals based on balance, limits, and currency rules.

function atmValidator(balance, requestAmount, dailyLimit) {

    // --- STEP 1: VALIDATION ---
    // All financial inputs (balance, amount, limit) must be numbers and not negative.
    if (typeof balance !== 'number' || balance < 0 ||
        typeof requestAmount !== 'number' || requestAmount < 0 ||
        typeof dailyLimit !== 'number' || dailyLimit < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK INDIVIDUAL BANK RULES ---
    // Rule 1: ATM only gives notes of 500. So request must be divisible by 500.
    const isMultipleOf500 = requestAmount % 500 === 0;

    // Rule 2: You cannot withdraw more than what is in your account balance.
    const hasEnoughBalance = requestAmount <= balance;

    // Rule 3: You cannot exceed the daily withdrawal limit set for your card.
    const isWithinLimit = requestAmount <= dailyLimit;

    // --- STEP 3: FINAL DECISION LOGIC ---
    // If all three rules are met (True), the transaction is a success.
    if (isMultipleOf500 && hasEnoughBalance && isWithinLimit) {
        // Calculate balance after subtraction and return success object.
        return {
            success: true,
            remainingBalance: balance - requestAmount
        };
    } else {
        // If even one rule fails, return a failed transaction message.
        return {
            success: false,
            message: "Transaction Failed"
        };
    }
}

// --- EXAMPLE USAGE ---
console.log(atmValidator(15000, 2000, 5000));
console.log(atmValidator(10000, 1200, 5000));