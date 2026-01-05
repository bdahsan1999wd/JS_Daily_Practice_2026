function calculateTotalPrice(cart) {
    // Rule 1: Check if input is array
    if (!Array.isArray(cart)) return "Invalid Input";

    let total = 0;

    // Loop through cart items
    for (let item of cart) {
        // Rule 2: Validate price & quantity
        if (item && typeof item.price === "number" && typeof item.quantity === "number") {
            total += item.price * item.quantity; // Rule 4: Add valid item total
        }
    }

    return total; // Return total or 0 if no valid items
}

// Example usage
console.log(calculateTotalPrice([
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
]));

console.log(calculateTotalPrice([{ name: "Pen", price: "10", quantity: 2 }]));
console.log(calculateTotalPrice("cart"));