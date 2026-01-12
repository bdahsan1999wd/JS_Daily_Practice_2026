function processAttendance(baseSalary, records) {

    // Rule 1: Validate input
    if (typeof baseSalary !== "number" || !Array.isArray(records)) {
        return "Invalid Input";
    }

    // Step 1: Initialize result containers
    const salaries = {};
    const penalized = [];

    // Step 2: Process each record
    for (let rec of records) {

        // Rule 2: Validate each record
        if (
            rec &&
            typeof rec.name === "string" &&
            typeof rec.absent === "number" &&
            rec.absent >= 0
        ) {

            // Step 3: Calculate deduction
            let deduction = rec.absent * 1000;

            // Rule 3: Extra penalty if absent > 3
            if (rec.absent > 3) {
                deduction += 2000;
                penalized.push(rec.name);
            }

            // Step 4: Calculate final salary
            let finalSalary = baseSalary - deduction;
            if (finalSalary < 0) finalSalary = 0;

            salaries[rec.name] = finalSalary;
        }
    }

    // Step 5: Return final result
    return {
        salaries,
        penalized
    };
}

// Example Usage
console.log(processAttendance(30000, [
    { name: "Ahsan", absent: 1 },
    { name: "Karim", absent: 5 },
    { name: "Rahim", absent: 0 },
]));