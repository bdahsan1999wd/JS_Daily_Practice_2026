function allocatePayment(invoices, paymentAmount) {

    // -------------------------
    // Step 1: Input Validation
    // -------------------------
    // - invoices must be an array
    // - paymentAmount must be a positive number
    if (
        !Array.isArray(invoices) ||
        typeof paymentAmount !== "number" ||
        paymentAmount <= 0
    ) {
        return "Invalid Input";
    }

    // -------------------------
    // Step 2: Sort invoices by priority and dueDate
    // -------------------------
    // - Higher priority first
    // - If same priority, older dueDate first
    invoices.sort((a, b) => {
        if (b.priority !== a.priority) return b.priority - a.priority;
        return new Date(a.dueDate) - new Date(b.dueDate);
    });

    // -------------------------
    // Step 3: Allocate payment
    // -------------------------
    let remainingPayment = paymentAmount; // Track leftover payment
    let paid = []; // Store payment details

    for (let invoice of invoices) {
        if (remainingPayment <= 0) break; // Stop if no money left

        // Pay either full invoice or remaining money, whichever is smaller
        let payAmount = Math.min(invoice.dueAmount, remainingPayment);

        // Record payment
        paid.push({ id: invoice.id, amount: payAmount });

        // Subtract from remaining payment
        remainingPayment -= payAmount;
    }

    // -------------------------
    // Step 4: Return result
    // -------------------------
    return { paid, remainingPayment };
}

// -------------------------
// Example Usage
// -------------------------
console.log(
    allocatePayment(
        [
            { id: "A", dueAmount: 500, dueDate: "2024-01-01", priority: 2 },
            { id: "B", dueAmount: 300, dueDate: "2023-12-01", priority: 3 },
        ],
        600
    )
);