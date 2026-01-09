function findSecondHighestSalary(employees) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(employees)) return "Invalid Input";

    // Rule 2: Filter valid salaries (number) & remove duplicates
    const salaries = [...new Set(
        employees.filter(e => e && typeof e.salary === "number")
            .map(e => e.salary)
    )];

    // Rule 4: If not enough salaries
    if (salaries.length < 2) return null;

    salaries.sort((a, b) => b - a); // Rule 3: sort descending
    return salaries[1]; // second highest
}

// Example Usage
console.log(findSecondHighestSalary([
    { name: "Ahsan", salary: 30000 },
    { name: "Karim", salary: 50000 },
    { name: "Rahim", salary: 40000 },
    { name: "Sabbir", salary: 50000 },
]));