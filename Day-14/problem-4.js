function onlineStoreRevenue(products) {
    // Rule 1: Validate input
    if (!Array.isArray(products)) return "Invalid Input";

    // Rule 2: Initialize containers
    let revenueByCategory = {};
    let totalRevenue = 0;

    // Rule 3: Process each product
    for (let product of products) {
        // Rule 4: Validate product
        if (
            product &&
            typeof product.product === "string" &&
            typeof product.category === "string" &&
            typeof product.price === "number"
        ) {
            totalRevenue += product.price;
            revenueByCategory[product.category] = (revenueByCategory[product.category] || 0) + product.price;
        }
    }

    // Rule 5: Return result object
    return {
        totalRevenue: totalRevenue,
        revenueByCategory: revenueByCategory
    };
}

// Example Usage:
console.log(
    onlineStoreRevenue([
        {
            product: "Laptop",
            category: "Electronics",
            price: 1000
        },
        {
            product: "Mouse",
            category: "Electronics",
            price: 50
        },
        {
            product: "Shirt",
            category: "Clothing",
            price: 30
        }
    ])
);
