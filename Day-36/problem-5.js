/**
 * PROBLEM–05: ⚡ Smart Grid Load Balancer
 
 * Logic: Manages industrial power distribution based on grid stability.
 */

function powerDistributor(currentLoad, isPriorityFactory, gridStatus) {
    // --- STEP 1: INPUT VALIDATION ---
    // Ensure grid status is exactly "Stable" or "Critical"
    if (typeof currentLoad !== 'number' || currentLoad < 0 || (gridStatus !== "Stable" && gridStatus !== "Critical")) {
        return "Invalid Input";
    }

    // --- STEP 2: LOAD MANAGEMENT ---
    if (gridStatus === "Critical") {
        // In critical state, priority factories get 50% load, others are shut down
        return isPriorityFactory
            ? { action: "Reduce Load", allowedLoad: currentLoad * 0.5 }
            : { action: "Shutdown", allowedLoad: 0 };
    } else {
        // In stable state, apply extra charges if load is too high (over 1000)
        return currentLoad > 1000
            ? { action: "Apply Surcharge", allowedLoad: currentLoad }
            : { action: "Normal Operation", allowedLoad: currentLoad };
    }
}

// --- EXAMPLE USAGE ---
console.log(powerDistributor(800, true, "Critical"));
console.log(powerDistributor(1200, false, "Stable"));