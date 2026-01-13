function assignJobs(machines, jobs) {
    // Rule 1: Validate input
    if (typeof machines !== "number" || !Array.isArray(jobs)) {
        return "Invalid Input";
    }

    // Rule 2: Initialize result containers
    let running = [];
    let queued = [];
    let availableMachines = machines;

    // Rule 3: Process jobs sequentially
    for (let j of jobs) {
        // Rule 4: Validate job
        if (j && typeof j.job === "string") {
            if (availableMachines > 0) {
                // Rule 5: Assign machine
                running.push(j.job);
                availableMachines--;
            } else {
                // Rule 6: No machine left → queue
                queued.push(j.job);
            }
        }
        // Rule 7: Ignore invalid job
    }

    // Rule 8: Return result object
    return {
        running: running,
        queued: queued,
        availableMachines: availableMachines
    };
}

// Example Usage:
console.log(assignJobs(2, [
    { job: "Cutting" },
    { job: "Welding" },
    { job: "Painting" }
]));

// Invalid Input Example:
console.log(assignJobs("2", []));