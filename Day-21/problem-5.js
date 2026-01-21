function examResultEngine(students) {
    
    // --- Input Validation ---
    // Rule: students must be an array
    if (!Array.isArray(students)) return "Invalid Input";

    const names = new Set(); // To check duplicate student names
    const pass = [];
    const fail = [];
    const hold = [];

    for (const s of students) {
        // --- Validate each student ---
        if (!s.name || typeof s.written !== "number" || typeof s.viva !== "number" || typeof s.practical !== "number") return "Invalid Input";
        if (names.has(s.name)) return "Invalid Input"; // Rule: no duplicate names
        names.add(s.name);

        // --- Conditional dependency rules ---
        // Rule: Fail immediately if written exam < 40
        if (s.written < 40) {
            fail.push(s.name);
            continue;
        }

        // Rule: Hold if practical exam < 40
        if (s.practical < 40) {
            hold.push(s.name);
            continue;
        }

        // Passed all 3 components
        pass.push(s.name);
    }

    // --- Return Result ---
    return { pass, fail, hold };
}

// --- Example Usage ---
const examResult = examResultEngine([
    { name: "Ahsan", written: 50, viva: 60, practical: 55 },
    { name: "Karim", written: 30, viva: 70, practical: 80 }
]);

console.log(examResult);