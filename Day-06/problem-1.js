function countValidProducts(products) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(products)) return "Invalid Input";

    let count = 0;

    // Loop through each product
    for (let item of products) {
        // Rule 2: A product is valid if name is string and price is number
        if (
            item &&
            typeof item.name === "string" &&
            typeof item.price === "number"
        ) {
            count++; // Rule 3: Count only valid products
        }
    }

    // Rule 4: If no valid product, count will be 0 automatically
    return count;
}

// Example Usage
console.log(countValidProducts([
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Pen", price: "10" },
]));

console.log(countValidProducts("products"));