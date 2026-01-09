function generateSalesSummary(sales) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(sales)) return "Invalid Input";

    const summary = {}; // store grouped product info

    for (let item of sales) {
        // Rule 2: Validate record (name:string, price:number, sold:number)
        if (item && typeof item.name === "string" && typeof item.price === "number" && typeof item.sold === "number") {
            // Rule 4: Group by product name
            if (!summary[item.name]) {
                summary[item.name] = { totalSold: 0, totalRevenue: 0 };
            }
            summary[item.name].totalSold += item.sold; // sum sold
            summary[item.name].totalRevenue += item.sold * item.price; // calculate revenue
        }
    }

    return summary; // Rule 6: Return object
}

// Example Usage
console.log(generateSalesSummary([
    { name: "Laptop", price: 50000, sold: 2 },
    { name: "Mouse", price: 500, sold: 10 },
    { name: "Laptop", price: 50000, sold: 1 },
]));
