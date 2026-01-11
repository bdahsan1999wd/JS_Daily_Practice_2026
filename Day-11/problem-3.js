function generateBill(cart, cash) {

    // Rule 1: Validate input
    if (!Array.isArray(cart) || typeof cash !== "number") {
        return "Invalid Input";
    }

    // Step 1: Initialize total
    let total = 0;

    // Step 2: Calculate total bill
    for (let item of cart) {

        // Rule 2: Validate cart item
        if (
            item &&
            typeof item.name === "string" &&
            typeof item.price === "number" &&
            typeof item.qty === "number" &&
            item.qty > 0
        ) {
            total += item.price * item.qty;
        }
    }

    // Step 3: Check if enough cash
    if (cash < total) return "Insufficient Money";

    // Step 4: Return final bill
    return {
        total: total,
        paid: cash,
        change: cash - total
    };
}

// Example Usage
console.log(generateBill([
    { name: "Rice", price: 60, qty: 5 },
    { name: "Oil", price: 180, qty: 2 },
], 1000));