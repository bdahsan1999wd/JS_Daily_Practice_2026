function manageIPS(batteryPercent, loadWatts, mode) {

    // -------------------------
    // Step 1: Input validation
    // -------------------------
    // Ensure proper types and ranges
    if (
        typeof batteryPercent !== "number" || batteryPercent < 0 || batteryPercent > 100 ||
        typeof loadWatts !== "number" || loadWatts <= 0 ||
        !["eco", "normal", "performance"].includes(mode)
    ) {
        return "Invalid Input";
    }

    // -------------------------
    // Step 2: Initialize variables
    // -------------------------
    let powerSource = "battery"; // assume running on battery by default
    let allowedLoad = loadWatts; // initial load allowed
    let warning = null;           // optional warning message

    // -------------------------
    // Step 3: Battery percentage rules
    // -------------------------
    if (batteryPercent < 10) {
        // Emergency shutdown if battery is critically low
        powerSource = "shutdown";
        allowedLoad = 0;
        warning = "Battery critical - shutting down";
        return { powerSource, allowedLoad, warning };
    } else if (batteryPercent < 20) {
        // Force main line if battery is low but not critical
        powerSource = "line";
        warning = "Low battery";
    }

    // -------------------------
    // Step 4: Load check
    // -------------------------
    if (loadWatts > 1200) {
        // Too heavy load, limit allowed load
        allowedLoad = Math.min(allowedLoad, 1200);
        warning = warning ? warning + " | High load reduced" : "High load reduced";
    }

    // -------------------------
    // Step 5: Mode adjustment
    // -------------------------
    // Eco mode reduces load by 30%
    if (mode === "eco") allowedLoad *= 0.7;
    // Performance mode increases load by 20%
    if (mode === "performance") allowedLoad *= 1.2;
    // Normal mode → no change

    // -------------------------
    // Step 6: Round load to integer for clarity
    // -------------------------
    allowedLoad = Math.round(allowedLoad);

    // -------------------------
    // Step 7: Return final result
    // -------------------------
    return { powerSource, allowedLoad, warning };
}

// Example usage
console.log(manageIPS(15, 1000, "eco"));