function findTopCustomer(orders) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(orders)) return "Invalid Input";

    const totals = {}; // store total purchase per customer

    for (let order of orders) {
        // Rule 2: Check if order is valid (customer:string, amount:number)
        if (order && typeof order.customer === "string" && typeof order.amount === "number") {
            totals[order.customer] = (totals[order.customer] || 0) + order.amount; // sum total per customer
        }
    }

    let maxCustomer = "";
    let maxAmount = -Infinity;

    // Find customer with highest total
    for (let customer in totals) {
        if (totals[customer] > maxAmount) {
            maxAmount = totals[customer];
            maxCustomer = customer;
        }
    }

    // Rule 6: If no valid record
    return maxAmount === -Infinity ? "" : maxCustomer;
}

// Example Usage
console.log(findTopCustomer([
    { customer: "Ahsan", amount: 500 },
    { customer: "Karim", amount: 300 },
    { customer: "Ahsan", amount: 700 },
    { customer: "Rahim", amount: 1000 },
]));