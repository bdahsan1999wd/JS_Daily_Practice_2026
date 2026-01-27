function maxServersRequired(loads, serverCapacity) {
    
    // ===============================
    // STEP 0: Input Validation
    // ===============================

    // loads must be an array
    // serverCapacity must be a positive number
    if (!Array.isArray(loads) || typeof serverCapacity !== "number" || serverCapacity <= 0) {
        return "Invalid Input";
    }

    // Each element in loads must be a positive number
    for (let l of loads) {
        if (typeof l !== "number" || l <= 0) return "Invalid Input";
    }

    // ===============================
    // STEP 1: Initialize variable
    // ===============================
    let maxServers = 0; // Keep track of maximum servers needed at any point

    // ===============================
    // STEP 2: Calculate servers needed for each load
    // ===============================
    for (let l of loads) {
        // Each server can handle serverCapacity load
        // To handle current load l, we need ceil(l / serverCapacity) servers
        const servers = Math.ceil(l / serverCapacity);

        // Update maximum if current load requires more servers
        maxServers = Math.max(maxServers, servers);
    }

    // ===============================
    // STEP 3: Return maximum servers required
    // ===============================
    return maxServers;
}

// ===============================
// Example Usage
// ===============================
console.log("Example Output:", maxServersRequired([120, 150, 80, 200], 100));