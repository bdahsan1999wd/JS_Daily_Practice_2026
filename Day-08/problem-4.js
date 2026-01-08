function validateAndCalculateOrder(orderItems) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(orderItems)) return "Invalid Input";

    let total = 0;
    let validItems = 0;
    let invalidItems = 0;

    // Loop through each item
    for (let item of orderItems) {
        // Rule 2: Check valid item
        if (
            item &&
            typeof item.name === "string" &&
            typeof item.price === "number" &&
            typeof item.quantity === "number"
        ) {
            // Rule 4: Calculate total = price * quantity
            total += item.price * item.quantity;
            validItems++;
        } else {
            // Rule 3: Count invalid items
            invalidItems++;
        }
    }

    // Rule 6: If no valid items
    if (validItems === 0) {
        return {
            total: 0,
            validItems: 0,
            invalidItems: orderItems.length
        };
    }

    // Rule 5: Return final object
    return {
        total: total,
        validItems: validItems,
        invalidItems: invalidItems
    };
}

// Example Usage
console.log(validateAndCalculateOrder([
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: "1500", quantity: 1 },
]));

console.log(validateAndCalculateOrder("order"));