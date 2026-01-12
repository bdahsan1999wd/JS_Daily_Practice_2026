function dispatchProducts(stock, orders) {

    // Rule 1: Validate input
    if (
        typeof stock !== "object" ||
        stock === null ||
        Array.isArray(stock) ||
        !Array.isArray(orders)
    ) {
        return "Invalid Input";
    }

    // Step 1: Initialize result containers
    const dispatched = [];
    const rejected = [];
    let remainingStock = { ...stock }; // clone stock

    // Step 2: Process each order sequentially
    for (let order of orders) {

        // Rule 2: Validate each order
        if (
            order &&
            typeof order.shop === "string" &&
            typeof order.item === "string" &&
            typeof order.qty === "number" &&
            order.qty > 0
        ) {

            // Rule 3: Check item existence and quantity
            if (
                remainingStock.hasOwnProperty(order.item) &&
                remainingStock[order.item] >= order.qty
            ) {
                remainingStock[order.item] -= order.qty; // update stock
                dispatched.push(order.shop);
            } else {
                rejected.push(order.shop);
            }
        }
    }

    // Step 3: Return final result
    return {
        dispatched,
        rejected,
        remainingStock
    };
}

// Example Usage
console.log(dispatchProducts(
    { rice: 10, oil: 5 },
    [
        { shop: "Shop1", item: "rice", qty: 4 },
        { shop: "Shop2", item: "oil", qty: 3 },
        { shop: "Shop3", item: "oil", qty: 4 },
    ]
));