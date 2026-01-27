function generateBills(users, today) {

    // -------------------------
    // Step 1: Input Validation
    // -------------------------
    // - users must be an array
    // - today must be a valid date string
    if (!Array.isArray(users) || isNaN(new Date(today))) {
        return "Invalid Input";
    }

    // -------------------------
    // Step 2: Setup plan pricing
    // -------------------------
    const planAmount = {
        basic: 500,
        pro: 1000,
        enterprise: 3000
    };

    let totalRevenue = 0; // Track total revenue collected
    let bills = [];       // Store each user's bill

    const current = new Date(today); // Convert today string to Date

    // -------------------------
    // Step 3: Process each user
    // -------------------------
    for (let user of users) {
        // Skip inactive users
        if (!user.isActive) continue;

        // Get base plan amount
        let base = planAmount[user.plan];

        // Calculate overdue days
        let lastPaid = new Date(user.lastPaidDate);
        let overdueDays = (current - lastPaid) / (1000 * 60 * 60 * 24); // ms → days

        // If overdue > 30 days, add 10% late fee
        if (overdueDays > 30) base *= 1.1;

        base = Math.round(base); // Round to nearest integer

        // Add to bills
        bills.push({ userId: user.id, amount: base });

        // Update total revenue
        totalRevenue += base;
    }

    // -------------------------
    // Step 4: Return final result
    // -------------------------
    return { totalRevenue, bills };
}

// -------------------------
// Example Usage
// -------------------------
console.log(
    generateBills(
        [
            { id: "U1", plan: "basic", lastPaidDate: "2024-12-01", isActive: true },
            { id: "U2", plan: "pro", lastPaidDate: "2025-01-10", isActive: false }
        ],
        "2025-02-01"
    )
);