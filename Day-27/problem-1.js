function topSortedProducts(products, sortBy, topCount) {

    // ===============================
    // STEP 0: Input Validation
    // ===============================

    // Check if products is an array
    // sortBy must be "price" or "rating"
    // topCount must be a positive number
    if (!Array.isArray(products) || (sortBy !== "price" && sortBy !== "rating") || typeof topCount !== "number" || topCount <= 0) {
        return "Invalid Input";
    }

    // topCount cannot exceed the number of products
    if (topCount > products.length) return "Invalid Input";

    // Each product must have proper name, price, rating
    for (let p of products) {
        if (typeof p.name !== "string" || typeof p.price !== "number" || typeof p.rating !== "number") {
            return "Invalid Input";
        }
    }


    // ===============================
    // STEP 1: Sorting
    // ===============================

    // Create a copy of products to avoid mutating original array
    // Sort by the property specified in 'sortBy' in descending order
    // If sortBy = "price", sort by price descending
    // If sortBy = "rating", sort by rating descending
    const sorted = [...products].sort((a, b) => b[sortBy] - a[sortBy]);


    // ===============================
    // STEP 2: Select Top Products
    // ===============================

    // Slice the first 'topCount' elements from sorted array
    return sorted.slice(0, topCount);
}


// ===============================
// Example Usage
// ===============================
const exampleProducts = [
    { name: "Laptop", price: 1200, rating: 4.5 },
    { name: "Mouse", price: 25, rating: 4.8 },
    { name: "Keyboard", price: 50, rating: 4.2 },
    { name: "Monitor", price: 300, rating: 4.6 },
];

// Sort by rating and get top 2 products
console.log("Example Output:", topSortedProducts(exampleProducts, "rating", 2));
