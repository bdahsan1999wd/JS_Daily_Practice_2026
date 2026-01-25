function minTrucksRequired(packages, capacity) {
    
    // Step 1: Validate input
    if (!Array.isArray(packages) || typeof capacity !== "number" || capacity <= 0) return "Invalid Input";
    for (let p of packages) {
        if (typeof p !== "number" || p <= 0) return "Invalid Input";
        if (p > capacity) return "Invalid Input"; // package too heavy
    }

    let trucks = 1, currentLoad = 0;

    // Step 2: Iterate packages and assign trucks
    for (let w of packages) {
        if (currentLoad + w > capacity) {
            trucks++; // need a new truck
            currentLoad = w; // load this package
        } else {
            currentLoad += w; // add package to current truck
        }
    }

    return trucks;
}

// Example Usage
console.log(minTrucksRequired([4, 8, 1, 4, 2, 1], 10));