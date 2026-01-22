function promotionEngine(employees) {
    // --- Input Validation ---
    // Ensure the input is an array
    if (!Array.isArray(employees)) return "Invalid Input";

    // Track employee names to avoid duplicates
    const names = new Set();

    // Validate each employee object
    for (const e of employees) {
        if (
            !e.name || typeof e.name !== "string" ||          // name must exist and be a string
            typeof e.performance !== "number" ||             // performance must be a number
            typeof e.attendance !== "number" ||              // attendance must be a number
            typeof e.warnings !== "number" ||               // warnings must be a number
            typeof e.seniority !== "number"                 // seniority must be a number
        ) return "Invalid Input";

        // Check for duplicate names
        if (names.has(e.name)) return "Invalid Input";
        names.add(e.name);
    }

    // --- Initialize Result Arrays ---
    const promoted = [];  // employees who meet promotion criteria
    const review = [];    // employees who need review
    const rejected = [];  // employees who do not qualify

    // --- Evaluate Each Employee ---
    for (const e of employees) {
        // --- Promotion Decision ---
        if (
            e.performance >= 85 &&        // high performance
            e.attendance >= 90 &&         // good attendance
            e.warnings === 0              // no warnings
        ) {
            promoted.push(e.name);        // qualifies for promotion
        } else if (
            e.performance >= 70 &&        // moderate performance
            e.attendance >= 80 &&         // acceptable attendance
            e.warnings <= 1 &&            // few warnings allowed
            e.seniority >= 2              // optional seniority consideration
        ) {
            review.push(e.name);          // needs manager review
        } else {
            rejected.push(e.name);        // does not qualify
        }
    }

    // --- Return the Result ---
    return { promoted, review, rejected };
}

// --- Example Usage ---
const promotionResult = promotionEngine([
    { name: "Ahsan", performance: 90, attendance: 95, warnings: 0, seniority: 5 },
    { name: "Karim", performance: 70, attendance: 80, warnings: 2, seniority: 3 },
    { name: "Salma", performance: 72, attendance: 85, warnings: 1, seniority: 3 },
]);

console.log(promotionResult);
