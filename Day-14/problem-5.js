function scholarshipAllocation(slots, applications) {
    // Rule 1: Validate input
    if (typeof slots !== "number" || !Array.isArray(applications)) return "Invalid Input";

    // Rule 2: Initialize containers
    let approved = [];
    let rejected = [];
    let remainingSlots = slots;

    // Rule 3: Process applications sequentially
    for (let app of applications) {
        // Rule 4: Validate application
        if (app && typeof app.name === "string" && typeof app.gpa === "number") {
            if (app.gpa >= 4.0 && remainingSlots > 0) {
                // Rule 5: Approve application
                approved.push(app.name);
                remainingSlots--;
            } else {
                // Rule 6: Reject application
                rejected.push(app.name);
            }
        }
    }

    // Rule 7: Return result object
    return {
        approved: approved,
        rejected: rejected,
        remainingSlots: remainingSlots
    };
}

// Example Usage:
console.log(
    scholarshipAllocation(
        2, // Number of available scholarship slots
        [
            {
                name: "Ahsan",
                gpa: 4.8
            },
            {
                name: "Karim",
                gpa: 3.6
            },
            {
                name: "Rahim",
                gpa: 4.2
            }
        ]
    )
);


// Invalid Input Example:
console.log(scholarshipAllocation("2", []));