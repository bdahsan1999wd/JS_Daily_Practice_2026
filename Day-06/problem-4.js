function averageScore(students) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(students)) return "Invalid Input";

    let sum = 0;
    let count = 0;

    // Loop through students
    for (let student of students) {
        // Rule 2: Ignore invalid score values
        if (student && typeof student.score === "number") {
            sum += student.score; // Rule 3: Add valid score
            count++;
        }
    }

    // Rule 4: If no valid scores, return 0
    if (count === 0) return 0;

    // Rule 5: Return average
    return sum / count;
}

// Example Usage
console.log(averageScore([
    { name: "A", score: 80 },
    { name: "B", score: 70 },
    { name: "C", score: 90 },
]));

console.log(averageScore("students"));