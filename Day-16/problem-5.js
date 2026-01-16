function orderFulfillmentTracker(orders) {
    
    // Rule 1: Validate input
    if (!Array.isArray(orders) || orders.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const statusCounts = { pending: 0, shipped: 0, delivered: 0 };
    const orderIds = new Set();
    const overduePending = [];

    // Rule 3: Process each order
    for (let o of orders) {
        // Rule 4: Validate order
        if (!o || typeof o.orderId !== "number" || o.orderId <= 0 || typeof o.status !== "string")
            return "Invalid Input";

        if (!["pending", "shipped", "delivered"].includes(o.status)) return "Invalid Input";

        // Rule 5: Check duplicate orderId
        if (orderIds.has(o.orderId)) return "Invalid Input";
        orderIds.add(o.orderId);

        // Rule 6: Count status
        statusCounts[o.status]++;

        // Rule 7: Check overdue pending
        if (o.status === "pending" && "daysPending" in o) {
            if (typeof o.daysPending !== "number" || o.daysPending < 0) return "Invalid Input";
            if (o.daysPending > 3) overduePending.push(o.orderId);
        }
    }

    // Rule 8: Return result
    return {
        statusCounts,
        overduePending,
        totalOrders: orders.length
    };
}

// Example Usage:
console.log(orderFulfillmentTracker([
    { orderId: 101, status: "shipped" },
    { orderId: 102, status: "pending", daysPending: 5 },
    { orderId: 103, status: "delivered" },
]));
