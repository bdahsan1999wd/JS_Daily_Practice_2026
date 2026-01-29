function manageElevatorPower(floorRequests, powerMode, batteryBackupPercent) {

    // -------------------------
    // Step 1: Input validation
    // -------------------------
    // Check if floorRequests is an array of numbers
    // Check if powerMode is either "line" or "battery"
    // Check if batteryBackupPercent is a number between 0–100
    if (
        !Array.isArray(floorRequests) || !floorRequests.every(f => typeof f === "number") ||
        !["line", "battery"].includes(powerMode) ||
        typeof batteryBackupPercent !== "number" || batteryBackupPercent < 0 || batteryBackupPercent > 100
    ) {
        return "Invalid Input"; // Invalid input → stop execution
    }

    // -------------------------
    // Step 2: Initialize variables
    // -------------------------
    // Clone floorRequests to avoid mutating the original array
    let activeRequests = [...floorRequests];
    let mode = "normal"; // Default mode

    // -------------------------
    // Step 3: Battery power rules
    // -------------------------
    if (powerMode === "battery") {
        if (batteryBackupPercent < 10) {
            // Emergency mode → battery critically low
            // Only allow ground floor
            activeRequests = [0];
            mode = "emergency";
        } else if (batteryBackupPercent < 25) {
            // Limited mode → battery low
            // Allow only nearest 2 floor requests
            activeRequests = activeRequests.slice(0, 2);
            mode = "limited";
        }
    }

    // -------------------------
    // Step 4: Limit total requests in normal mode
    // -------------------------
    if (activeRequests.length > 5 && mode === "normal") {
        // Too many requests → process first 5 only
        activeRequests = activeRequests.slice(0, 5);
    }

    // -------------------------
    // Step 5: Return elevator schedule
    // -------------------------
    return { activeRequests, mode };
}

// -------------------------
// Example usage
// -------------------------
console.log(manageElevatorPower([1, 5, 7, 10, 12, 15], "battery", 20));