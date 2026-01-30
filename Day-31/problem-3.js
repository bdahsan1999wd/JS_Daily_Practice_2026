function inventoryAlert(itemCount, minRequired, reorderPending) {

    // --- Input Validation ---
    // itemCount and minRequired must be >= 0
    // reorderPending must be boolean
    if (typeof itemCount !== "number" || itemCount < 0 ||
        typeof minRequired !== "number" || minRequired < 0 ||
        typeof reorderPending !== "boolean") {
        return "Invalid Input"; // return error if validation fails
    }

    let status, action;

    // --- Case 1: Stock below minimum → alert Low stock ---
    if (itemCount < minRequired) {
        status = "Low stock";
        action = "Reorder now";
    }
    // --- Case 2: Reorder pending → show waiting message ---
    else if (reorderPending) {
        status = "Reorder pending";
        action = "Waiting for delivery";
    }
    // --- Case 3: Stock sufficient ---
    else {
        status = "Stock sufficient";
        action = "No action needed";
    }

    // Return final result
    return { status, action };
}

// --- Example Usage ---
console.log(inventoryAlert(12, 20, false));