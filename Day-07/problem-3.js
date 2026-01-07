function findMostExpensiveProduct(products) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(products)) return "Invalid Input";

    let maxName = "";
    let maxPrice = -Infinity;

    // Loop through each product
    for (let item of products) {
        // Rule 2: price must be a number
        if (item && typeof item.price === "number") {
            if (item.price > maxPrice) {
                maxPrice = item.price;
                maxName = item.name;
            }
        }
    }

    // Rule 4: If no valid product found, return ""
    return maxName;
}

// Example Usage
console.log(findMostExpensiveProduct([
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Monitor", price: 15000 },
]));

console.log(findMostExpensiveProduct("products"));