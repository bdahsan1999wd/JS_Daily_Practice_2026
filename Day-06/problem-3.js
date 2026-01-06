function highestPaidEmployee(employees) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(employees)) return "Invalid Input";

    let maxSalary = -Infinity;
    let highestName = "";

    // Loop through employees
    for (let emp of employees) {
        // Rule 2: Ignore invalid salary values
        if (emp && typeof emp.salary === "number") {
            // Rule 3: Compare and find highest salary
            if (emp.salary > maxSalary) {
                maxSalary = emp.salary;
                highestName = emp.name;
            }
        }
    }

    // Rule 4: If no valid employee, highestName remains ""
    return highestName;
}

// Example Usage
console.log(highestPaidEmployee([
    { name: "A", salary: 20000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 30000 },
]));

console.log(highestPaidEmployee("employees"));