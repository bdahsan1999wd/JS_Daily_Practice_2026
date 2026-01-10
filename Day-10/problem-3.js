function processExamResults(students) {

    // Rule 1: Validate input

    if (!Array.isArray(students)) return "Invalid Input";

    const results = {};

    // Step 1: Process each student

    for (let student of students) {

        // Rule 2: Validate student record

        if (

            student &&

            typeof student.name === "string" &&

            Array.isArray(student.marks) &&

            student.marks.every(m => typeof m === "number")

        ) {

            // Step 2: Check for fail (any mark < 40)

            if (student.marks.some(m => m < 40)) {

                results[student.name] = "Fail";

            } else {

                // Step 3: Calculate average

                const avg = student.marks.reduce((a, b) => a + b, 0) / student.marks.length;

                // Step 4: Determine result based on average

                if (avg >= 80) results[student.name] = "Merit";

                else if (avg >= 60) results[student.name] = "Pass";

                else results[student.name] = "Low Pass";

            }

        }

    }

    // Step 5: Return final results object

    return results;

}

// Example Usage

console.log(processExamResults([

    { name: "Ahsan", marks: [80, 70, 90] },

    { name: "Karim", marks: [30, 35, 40] },

    { name: "Rahim", marks: [60, 65, 70] },

]));