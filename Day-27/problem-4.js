function daysToRestock(stockLevels, dailySales, maxRestockPerDay) {

    // ===============================
    // STEP 0: Input Validation
    // ===============================

    // stockLevels and dailySales must be arrays of same length
    // maxRestockPerDay must be a positive number
    if (!Array.isArray(stockLevels) || !Array.isArray(dailySales) || typeof maxRestockPerDay !== "number" || maxRestockPerDay <= 0) {
        return "Invalid Input";
    }
    if (stockLevels.length !== dailySales.length) return "Invalid Input";

    // Each element in stockLevels and dailySales must be positive numbers
    for (let i = 0; i < stockLevels.length; i++) {
        if (typeof stockLevels[i] !== "number" || stockLevels[i] <= 0 ||
            typeof dailySales[i] !== "number" || dailySales[i] <= 0) {
            return "Invalid Input";
        }
    }

    // ===============================
    // STEP 1: Initialize variable
    // ===============================
    let totalDays = 0; // minimum days required to restock all items

    // ===============================
    // STEP 2: Calculate days for each item
    // ===============================
    for (let i = 0; i < stockLevels.length; i++) {
        // Calculate deficit for item i
        const deficit = Math.max(dailySales[i] - stockLevels[i], 0); // items that need restocking

        // Days needed for this item = ceil(deficit / maxRestockPerDay)
        const days = Math.ceil(deficit / maxRestockPerDay);

        // Update totalDays = maximum days needed across all items
        totalDays = Math.max(totalDays, days);
    }

    // ===============================
    // STEP 3: Return result
    // ===============================
    return totalDays;
}

// ===============================
// Example Usage
// ===============================
console.log("Example Output:", daysToRestock([5, 2, 10], [3, 4, 5], 5));