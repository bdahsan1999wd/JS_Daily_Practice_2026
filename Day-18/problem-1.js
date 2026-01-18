function expenseAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalExpense = {};
    const nameSet = new Set();
    const riskySpenders = [];
    const stableSpenders = [];
    let highestSpender = "";
    let maxTotal = -1;

    // Rule 3: Process each person
    for (let p of data) {

        // Rule 4: Validate object structure
        if (!p || typeof p.name !== "string" || !Array.isArray(p.expenses) || p.expenses.length === 0)
            return "Invalid Input";

        // Rule 5: Check duplicate names
        if (nameSet.has(p.name)) return "Invalid Input";
        nameSet.add(p.name);

        // Rule 6: Validate expenses & calculate sum, min, max
        let sum = 0;
        let min = Infinity;
        let max = -Infinity;

        for (let v of p.expenses) {
            if (typeof v !== "number" || v <= 0) return "Invalid Input";
            sum += v;
            if (v < min) min = v;
            if (v > max) max = v;
        }

        totalExpense[p.name] = sum;

        // Rule 7: Track highest spender
        if (sum > maxTotal) {
            maxTotal = sum;
            highestSpender = p.name;
        }

        // Rule 8: Risky & stable check
        const avg = sum / p.expenses.length;
        if (avg > 2000) riskySpenders.push(p.name);
        if (max - min < 500) stableSpenders.push(p.name);
    }

    // Rule 9: Return result
    return { totalExpense, highestSpender, riskySpenders, stableSpenders };
}


// Example Usage
console.log(expenseAnalyzer([
    { name: "Ahsan", expenses: [1200, 1500, 1100, 1800] },
    { name: "Karim", expenses: [3000, 3200, 2800, 3500] },
]));
