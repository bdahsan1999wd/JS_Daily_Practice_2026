function stockMonitor(products) {
    // Rule 1: Validate input
    if (!Array.isArray(products) || products.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    let totalStock = 0;
    const lowStock = [];
    const productNames = new Set();

    // Rule 3: Process each product
    for (let p of products) {
        if (!p || typeof p.product !== "string" || typeof p.stock !== "number" || p.stock < 0)
            return "Invalid Input";

        // Rule 4: Check duplicate product names
        if (productNames.has(p.product)) return "Invalid Input";
        productNames.add(p.product);

        totalStock += p.stock;

        // Rule 5: Track low-stock products
        if (p.stock <= 15) lowStock.push(p.product);
    }

    // Rule 6: Return result
    return { totalStock, lowStock };
}

// Example Usage:
console.log(stockMonitor([
    { product: "Milk", stock: 20 },
    { product: "Eggs", stock: 50 },
    { product: "Bread", stock: 10 }
]));