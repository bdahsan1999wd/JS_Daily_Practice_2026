/**
 * PROBLEM–01: 🛍️ Smart Grocery Budget Planner
 * Logic: Calculate total, remove the priciest item if over budget, and return final status.
 */

function budgetPlanner(totalBudget, items) {

    // --- STEP 1: INPUT VALIDATION ---
    /**
     * We check four critical conditions to ensure the function doesn't crash:
     * 1. 'totalBudget' must be a number.
     * 2. 'totalBudget' must be greater than 0 (logic requirement).
     * 3. 'items' must be an array.
     * 4. 'items' must not be empty (at least one item required).
     */
    if (
        typeof totalBudget !== 'number' ||
        totalBudget <= 0 ||
        !Array.isArray(items) ||
        items.length === 0
    ) {
        return "Invalid Input";
    }

    let totalCost = 0;   // To store the sum of all item prices
    let maxPrice = -1;   // To keep track of the most expensive item found so far

    // --- STEP 2: ITEM-BY-ITEM DATA VALIDATION & CALCULATION ---
    /**
     * Iterate through each item object in the array to calculate cost
     * and find the maximum price.
     */
    for (let item of items) {
        /**
         * Individual Item Validation:
         * - 'item' must not be null (since null is technically an 'object').
         * - 'item' must be an actual object.
         * - 'item.name' must be a string.
         * - 'item.price' must be a number and not negative.
         */
        if (
            item === null ||
            typeof item !== 'object' ||
            typeof item.name !== 'string' ||
            typeof item.price !== 'number' ||
            item.price < 0
        ) {
            return "Invalid Input";
        }

        // Add current item price to the total running cost
        totalCost += item.price;

        // Compare and store the highest price found in the list
        if (item.price > maxPrice) {
            maxPrice = item.price;
        }
    }

    // --- STEP 3: RE-EVALUATION LOGIC (THE HEART OF THE PROBLEM) ---
    /**
     * Requirement: If the initial total cost is higher than the budget,
     * we must subtract the price of the most expensive item exactly once.
     */
    if (totalCost > totalBudget) {
        totalCost -= maxPrice;
    }

    // --- STEP 4: FINAL OBJECT GENERATION ---
    /**
     * We compare the final cost (after potential removal) with the budget.
     * - If finalCost <= totalBudget: "Under Budget"
     * - Otherwise: "Over Budget"
     */
    return {
        status: totalCost <= totalBudget ? "Under Budget" : "Over Budget",
        finalCost: totalCost
    };
}

// --- EXAMPLE USAGE ---
const shoppingList = [{ name: "Oil", price: 700 }, { name: "Rice", price: 500 }];
console.log(budgetPlanner(1000, shoppingList));