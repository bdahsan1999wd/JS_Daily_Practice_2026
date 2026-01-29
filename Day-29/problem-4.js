function fuelAdvisor(fuelPercent, distanceToDestination, avgMileage) {

    // -------------------------
    // Step 1: Input validation
    // -------------------------
    // Ensure all inputs are numbers and in valid range
    if (
        typeof fuelPercent !== "number" || fuelPercent < 0 || fuelPercent > 100 ||
        typeof distanceToDestination !== "number" || distanceToDestination <= 0 ||
        typeof avgMileage !== "number" || avgMileage <= 0
    ) {
        return "Invalid Input"; // Invalid input → stop execution
    }

    // -------------------------
    // Step 2: Calculate reachable distance
    // -------------------------
    // Reachable distance based on current fuel percentage
    const reachableDistance = avgMileage * (fuelPercent / 100);

    // -------------------------
    // Step 3: Initialize result variables
    // -------------------------
    let canReach = reachableDistance >= distanceToDestination; // Can the car reach destination?
    let warning = null;                // Warning message for low fuel
    let suggestedAction = "continue";  // Default action if fuel is sufficient

    // -------------------------
    // Step 4: Check for low fuel warning
    // -------------------------
    if (fuelPercent < 15) {
        warning = "Low fuel"; // Add warning if fuel critically low
    }

    // -------------------------
    // Step 5: Check if destination is reachable
    // -------------------------
    if (!canReach) {
        // Cannot reach → suggest refuel
        suggestedAction = "refuel";
    }

    // -------------------------
    // Step 6: Return advisory result
    // -------------------------
    return { canReach, warning, suggestedAction };
}

// -------------------------
// Example usage
// -------------------------
console.log(fuelAdvisor(20, 150, 10));