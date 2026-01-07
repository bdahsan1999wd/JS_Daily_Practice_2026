function countOutOfStockItems(products) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(products)) return "Invalid Input";

    let count = 0;

    // Loop through each product
    for (let item of products) {
        // Rule 2 & 3: stock must be number and equal 0
        if (item && typeof item.stock === "number" && item.stock === 0) {
            count++;
        }
    }

    // Rule 5: If none found, count will be 0
    return count;
}

// Example Usage
console.log(countOutOfStockItems([
    { name: "Laptop", stock: 10 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 0 },
    { name: "Monitor", stock: 5 },
]));

console.log(countOutOfStockItems("products"));