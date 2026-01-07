function calculateCartTotal(cart) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(cart)) return "Invalid Input";

    let total = 0;

    // Loop through each item
    for (let item of cart) {
        // Rule 2 & 3: price and quantity must be numbers
        if (
            item &&
            typeof item.price === "number" &&
            typeof item.quantity === "number"
        ) {
            total += item.price * item.quantity;
        }
    }

    // Rule 5: If no valid items, total will be 0
    return total;
}

// Example Usage
console.log(calculateCartTotal([
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 },
]));

console.log(calculateCartTotal("cart"));