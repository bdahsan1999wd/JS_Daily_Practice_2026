function groupByGrade(students) {
    // Rule 1: Check if input is array
    if (!Array.isArray(students)) return "Invalid Input";

    const result = { A: [], B: [], F: [] };

    for (let student of students) {
        // Rule 2: Check valid score
        if (student && typeof student.score === "number" && typeof student.name === "string") {
            if (student.score >= 80) result.A.push(student.name); // Rule 3: Grade A
            else if (student.score >= 60) result.B.push(student.name); // Grade B
            else result.F.push(student.name); // Grade F
        }
    }

    // Rule 5: Remove empty grade arrays
    for (let key of Object.keys(result)) {
        if (result[key].length === 0) delete result[key];
    }

    return result;
}

// Example usage
console.log(groupByGrade([
    { name: "A", score: 85 },
    { name: "B", score: 72 },
    { name: "C", score: 40 },
]));