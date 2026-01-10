function processExamResults(students) {
    if (!Array.isArray(students)) return "Invalid Input";

    const results = {};

    for (let student of students) {
        if (student && typeof student.name === "string" && Array.isArray(student.marks) && student.marks.every(m => typeof m === "number")) {
            // Check if any mark < 40 → Fail
            if (student.marks.some(m => m < 40)) {
                results[student.name] = "Fail";
            } else {
                const avg = student.marks.reduce((a, b) => a + b, 0) / student.marks.length;
                if (avg >= 80) results[student.name] = "Merit";
                else if (avg >= 60) results[student.name] = "Pass";
                else results[student.name] = "Low Pass";
            }
        }
    }

    return results;
}

// Example Usage
console.log(processExamResults([
    { name: "Ahsan", marks: [80, 70, 90] },
    { name: "Karim", marks: [30, 35, 40] },
    { name: "Rahim", marks: [60, 65, 70] },
]));