/**
 * PROBLEM–05: 🏠 Flat Rent & Utility Splitter

 * Logic: Aggregates housing costs and determines the per-person financial burden.
 */

function calculateFlatExpenses(baseRent, utilityBill, numberOfRoommates) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof baseRent !== 'number' || baseRent <= 0 ||
        typeof utilityBill !== 'number' || utilityBill <= 0 ||
        typeof numberOfRoommates !== 'number' || numberOfRoommates <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTALS ---
    const totalCost = baseRent + utilityBill;
    const sharePerPerson = totalCost / numberOfRoommates;

    // --- STEP 3: CONSTRUCT RESULT OBJECT ---
    // We return an object to provide both the cost and a 'High Expense' flag
    return {
        totalPerPerson: Number(sharePerPerson.toFixed(2)), // Rounded to 2 decimals
        isHighExpense: sharePerPerson > 5000 // Returns true if cost is > 5000 TK
    };
}

// --- EXAMPLE USAGE ---
console.log(calculateFlatExpenses(15000, 3000, 3));
console.log(calculateFlatExpenses(10000, 2000, 4));