function sortProductsAdvanced(products) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(products)) return "Invalid Input";

    // Rule 2: Filter valid products
    const validProducts = products.filter(
        p => p && typeof p.name === "string" && typeof p.price === "number" && typeof p.rating === "number"
    );

    // Rule 3: Sort by rating descending, then price ascending if tie
    validProducts.sort((a, b) => {
        if (b.rating !== a.rating) return b.rating - a.rating; // rating descending
        return a.price - b.price; // price ascending if rating same
    });

    return validProducts; // Rule 4: Return sorted array
}

// Example Usage
console.log(sortProductsAdvanced([
    { name: "Laptop", price: 50000, rating: 4.5 },
    { name: "Mouse", price: 500, rating: 4.8 },
    { name: "Keyboard", price: 1500, rating: 4.8 },
]));