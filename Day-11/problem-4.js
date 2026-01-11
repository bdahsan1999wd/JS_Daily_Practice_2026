function bookAppointments(slots, requests) {

    // Rule 1: Validate input
    if (typeof slots !== "number" || !Array.isArray(requests)) {
        return "Invalid Input";
    }

    // Step 1: Initialize result containers
    const confirmed = [];
    const waiting = [];
    let remainingSlots = slots;

    // Step 2: Process each request
    for (let req of requests) {

        // Rule 2: Validate request
        if (req && typeof req.name === "string") {
            if (remainingSlots > 0) {
                confirmed.push(req.name);
                remainingSlots--;
            } else {
                waiting.push(req.name);
            }
        }
    }

    // Step 3: Return final result
    return { confirmed, waiting };
}

// Example Usage
console.log(bookAppointments(2, [
    { name: "Ahsan" },
    { name: "Karim" },
    { name: "Rahim" },
]));