function scheduleAppointments(slots, patients) {
    // Rule 1: Validate input
    if (typeof slots !== "number" || !Array.isArray(patients)) {
        return "Invalid Input";
    }

    // Rule 2: Initialize result containers
    let confirmed = [];
    let waiting = [];
    let remainingSlots = slots;

    // Rule 3: Process patients sequentially
    for (let p of patients) {
        // Rule 4: Validate patient
        if (p && typeof p.name === "string") {
            if (remainingSlots > 0) {
                // Rule 5: Confirm appointment
                confirmed.push(p.name);
                remainingSlots--;
            } else {
                // Rule 6: No slot left → waiting
                waiting.push(p.name);
            }
        }
        // Rule 7: Ignore invalid patient
    }

    // Rule 8: Return result object
    return {
        confirmed: confirmed,
        waiting: waiting,
        remainingSlots: remainingSlots
    };
}

// Example Usage:
console.log(scheduleAppointments(2, [
    { name: "Ahsan" },
    { name: "Karim" },
    { name: "Rahim" }
]));

// Invalid Input Example:
console.log(scheduleAppointments(2, "patients"));