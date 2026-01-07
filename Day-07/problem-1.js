function findCheapestProduct(products) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(products)) return "Invalid Input";

    let cheapestName = "";
    let cheapestPrice = Infinity;

    // Loop through each product
    for (let item of products) {
        // Rule 2: price must be a number
        if (item && typeof item.price === "number") {
            if (item.price < cheapestPrice) {
                cheapestPrice = item.price;
                cheapestName = item.name;
            }
        }
    }

    // Rule 4: If no valid product found, return ""
    return cheapestName;
}

// Example Usage
console.log(findCheapestProduct([
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
]));

console.log(findCheapestProduct("products"));