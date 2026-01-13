function processScholarships(slots, applications) {
    // Rule 1: Validate input
    if (typeof slots !== "number" || !Array.isArray(applications)) {
        return "Invalid Input";
    }

    // Rule 2: Initialize result containers
    let approved = [];
    let rejected = [];
    let remainingSlots = slots;

    // Rule 3: Process applications sequentially
    for (let app of applications) {
        // Rule 4: Validate application
        if (
            app &&
            typeof app.name === "string" &&
            typeof app.gpa === "number"
        ) {
            // Rule 5: Check GPA and slot availability
            if (app.gpa >= 4.0 && remainingSlots > 0) {
                // Rule 6: Approve
                approved.push(app.name);
                remainingSlots--;
            } else {
                // Rule 7: Reject
                rejected.push(app.name);
            }
        }
        // Rule 8: Ignore invalid application
    }

    // Rule 9: Return result object
    return {
        approved: approved,
        rejected: rejected,
        remainingSlots: remainingSlots
    };
}

// Example Usage:
console.log(processScholarships(2, [
    { name: "Ahsan", gpa: 4.9 },
    { name: "Karim", gpa: 3.2 },
    { name: "Rahim", gpa: 4.5 }
]));

// Invalid Input Example:
console.log(processScholarships(2, {}));