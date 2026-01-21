function orderProcessingPipeline(orders) {

    // --- Input Validation ---
    // Rule: orders must be an array
    if (!Array.isArray(orders)) return "Invalid Input";

    const ids = new Set(); // To check duplicate order IDs
    const delivered = [];
    const delayed = [];
    const cancelled = [];
    const inProgress = [];

    for (const o of orders) {
        // --- Validate order object ---
        if (typeof o.id !== "number") return "Invalid Input";
        if (ids.has(o.id)) return "Invalid Input"; // Rule: no duplicate orders
        ids.add(o.id);

        // --- Workflow Engine ---
        // Rule: Order passes through states: created → paid → packed → shipped → delivered
        if (!o.created) {
            cancelled.push(o.id); // Never created → cancelled
            continue;
        }
        if (!o.paid) {
            inProgress.push(o.id); // Payment pending → in progress
            continue;
        }
        if (!o.packed) {
            cancelled.push(o.id); // Packing failed → refund → cancelled
            continue;
        }
        if (!o.shipped) {
            delayed.push(o.id); // Shipping failed → delayed
            continue;
        }
        if (!o.delivered) {
            delayed.push(o.id); // Not delivered yet → delayed
            continue;
        }

        // Successfully completed all stages
        delivered.push(o.id);
    }

    // --- Return Result ---
    return { delivered, delayed, cancelled, inProgress };
}

// --- Example Usage ---
const orderResult = orderProcessingPipeline([
    { id: 1, created: true, paid: true, packed: true, shipped: true, delivered: true },
    { id: 2, created: true, paid: false, packed: false, shipped: false, delivered: false },
    { id: 3, created: true, paid: true, packed: false, shipped: false, delivered: false },
    { id: 4, created: true, paid: true, packed: true, shipped: false, delivered: false },
    { id: 5, created: true, paid: true, packed: true, shipped: true, delivered: false }
]);

console.log(orderResult);
