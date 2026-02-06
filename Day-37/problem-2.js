/**
 * PROBLEM–02: 🛒 Grocery Budget Controller

 * Logic: Calculates total cost of an item list and compares it against a set budget.
 */

function groceryBudgetChecker(budget, items) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure budget is a positive number and items is a non-empty array
    if (typeof budget !== 'number' || budget <= 0 || !Array.isArray(items) || items.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTAL COST ---
    // We use the reduce method to sum up the prices of all objects in the items array
    let totalCost = items.reduce((sum, item) => sum + item.price, 0);

    // --- STEP 3: BALANCE CHECK ---
    // Check if we stayed within budget or went over
    if (totalCost <= budget) {
        // Return the remaining money
        return budget - totalCost;
    } else {
        // Return a string message showing the deficit
        const deficit = totalCost - budget;
        return `Over Budget by ${deficit}`;
    }
}

// --- EXAMPLE USAGE ---
console.log(groceryBudgetChecker(500, [{ name: "Egg", price: 150 }, { name: "Milk", price: 100 }]));
console.log(groceryBudgetChecker(200, [{ name: "Meat", price: 800 }]));