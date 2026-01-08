function removeDuplicateProducts(products) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(products)) return "Invalid Input";

    let result = [];
    let seenNames = [];

    // Loop through each product
    for (let item of products) {
        // Rule 2: Only consider items whose name is string
        if (item && typeof item.name === "string") {
            // Rule 3 & 4: Remove duplicates by name, keep first
            if (!seenNames.includes(item.name)) {
                seenNames.push(item.name);
                result.push(item);
            }
        }
        // Rule 5: Ignore invalid items
    }

    // Rule 6: If no valid product, result will be []
    return result;
}

// Example Usage
console.log(removeDuplicateProducts([
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Laptop", price: 48000 },
]));

console.log(removeDuplicateProducts("products"));