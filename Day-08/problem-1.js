function findBestSellingProduct(sales) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(sales)) return "Invalid Input";

    let maxRevenue = -1;
    let bestProduct = "";

    // Loop through each record
    for (let item of sales) {
        // Rule 2: Check valid record
        if (
            item &&
            typeof item.name === "string" &&
            typeof item.price === "number" &&
            typeof item.sold === "number"
        ) {
            // Rule 3: Calculate revenue = price * sold
            const revenue = item.price * item.sold;

            // Rule 4: Find highest revenue
            if (revenue > maxRevenue) {
                maxRevenue = revenue;
                bestProduct = item.name;
            }
        }
        // Rule 5: Ignore invalid records
    }

    // Rule 6: If no valid record found, return ""
    return bestProduct;
}

// Example Usage
console.log(findBestSellingProduct([
    { name: "Laptop", price: 50000, sold: 3 },
    { name: "Mouse", price: 500, sold: 50 },
    { name: "Keyboard", price: 1500, sold: 10 },
]));

console.log(findBestSellingProduct("sales"));