function processFoodOrders(stock, orders) {

    // Rule 1: Validate input
    if (typeof stock !== "object" || stock === null || !Array.isArray(orders)) {
        return "Invalid Input";
    }

    // Step 1: Initialize result containers
    const served = [];
    const rejected = [];

    // Step 2: Copy stock to avoid mutation
    const remainingStock = { ...stock };

    // Step 3: Process orders sequentially
    for (let order of orders) {

        // Rule 2: Validate order
        if (
            order &&
            typeof order.user === "string" &&
            typeof order.item === "string" &&
            typeof order.qty === "number" &&
            order.qty > 0
        ) {
            if (
                remainingStock[order.item] !== undefined &&
                remainingStock[order.item] >= order.qty
            ) {
                served.push(order.user);
                remainingStock[order.item] -= order.qty;
            } else {
                rejected.push(order.user);
            }
        }
    }

    // Step 4: Return final result
    return {
        served,
        rejected,
        remainingStock
    };
}

// Example Usage
console.log(processFoodOrders(
    { burger: 5, pizza: 3 },
    [
        { user: "Ahsan", item: "burger", qty: 2 },
        { user: "Karim", item: "pizza", qty: 4 },
        { user: "Rahim", item: "pizza", qty: 2 },
    ]
));