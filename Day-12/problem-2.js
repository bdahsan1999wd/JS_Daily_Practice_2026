function enrollStudents(seats, students) {

    // Rule 1: Validate input
    if (typeof seats !== "number" || !Array.isArray(students)) {
        return "Invalid Input";
    }

    // Step 1: Initialize result containers
    const enrolled = [];
    const waitlist = [];
    let remainingSeats = seats;

    // Step 2: Process students sequentially
    for (let student of students) {

        // Rule 2: Validate each student
        if (student && typeof student.name === "string") {

            // Rule 3: Check seat availability
            if (remainingSeats > 0) {
                enrolled.push(student.name);
                remainingSeats--; // consume seat
            } else {
                waitlist.push(student.name);
            }
        }
    }

    // Step 3: Return final result
    return {
        enrolled,
        waitlist,
        remainingSeats
    };
}

// Example Usage
console.log(enrollStudents(3, [
    { name: "Ahsan" },
    { name: "Karim" },
    { name: "Rahim" },
    { name: "Tania" },
]));
