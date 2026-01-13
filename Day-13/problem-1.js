function assignTrips(cars, requests) {
    // Rule 1: Validate input
    if (typeof cars !== "number" || !Array.isArray(requests)) {
        return "Invalid Input";
    }

    // Rule 2: Initialize result containers
    let assigned = [];
    let pending = [];
    let availableCars = cars;

    // Rule 3: Process requests sequentially
    for (let req of requests) {
        // Rule 4: Validate request
        if (req && typeof req.rider === "string") {
            if (availableCars > 0) {
                // Rule 5: Assign car
                assigned.push(req.rider);
                availableCars--;
            } else {
                // Rule 6: No car left → pending
                pending.push(req.rider);
            }
        }
        // Rule 7: Ignore invalid request
    }

    // Rule 8: Return result object
    return {
        assigned: assigned,
        pending: pending,
        availableCars: availableCars
    };
}

// Example Usage:
console.log(assignTrips(2, [
    { rider: "Ahsan" },
    { rider: "Karim" },
    { rider: "Rahim" }
]));


// Invalid Input Example:
console.log(assignTrips("2", []));