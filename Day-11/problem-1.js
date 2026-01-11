function processTrainTickets(totalTickets, requests) {

    // Rule 1: Validate input
    if (typeof totalTickets !== "number" || !Array.isArray(requests)) {
        return "Invalid Input";
    }

    // Step 1: Initialize result containers
    const sold = [];
    const rejected = [];
    let remainingTickets = totalTickets;

    // Step 2: Process each request
    for (let req of requests) {

        // Rule 2: Validate request
        if (
            req &&
            typeof req.name === "string" &&
            typeof req.tickets === "number" &&
            req.tickets > 0
        ) {
            if (req.tickets <= remainingTickets) {
                sold.push(req.name);
                remainingTickets -= req.tickets;
            } else {
                rejected.push(req.name);
            }
        }
    }

    // Step 3: Return final result
    return { sold, rejected, remainingTickets };
}

// Example Usage
console.log(processTrainTickets(5, [
    { name: "Ahsan", tickets: 2 },
    { name: "Karim", tickets: 3 },
    { name: "Rahim", tickets: 1 },
]));