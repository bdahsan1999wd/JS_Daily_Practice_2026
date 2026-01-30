function waterHeaterScheduler(currentTemp, desiredTemp, usagePattern, peakHours) {
    
    // ==========================
    // Step 1: Input Validation
    // ==========================
    if (
        typeof currentTemp !== "number" ||                  // must be a number
        typeof desiredTemp !== "number" ||                  // must be a number
        !["morning", "evening", "night"].includes(usagePattern) || // valid usagePattern
        typeof peakHours !== "boolean"                     // must be boolean
    ) {
        return "Invalid Input"; // reject invalid inputs
    }

    // ==========================
    // Step 2: Determine if Heater Should Be ON
    // ==========================
    // Heater only runs if current temperature is below desired
    let heaterOn = currentTemp < desiredTemp;

    // ==========================
    // Step 3: Determine Base Power Level
    // ==========================
    let powerLevel = 1; // default minimum power level

    if (heaterOn) {
        // Adjust power based on usage pattern
        if (usagePattern === "morning") powerLevel += 2;   // morning → +2
        if (usagePattern === "evening") powerLevel += 1;   // evening → +1
        // night → no increase

        // Reduce power during peak hours, but never below 1
        if (peakHours) powerLevel = Math.max(1, powerLevel - 1);

        // Cap power at 5
        powerLevel = Math.min(5, powerLevel);
    }

    // ==========================
    // Step 4: Return Result
    // ==========================
    return { heaterOn, powerLevel };
}

// --- Example Usage ---
console.log(waterHeaterScheduler(40, 60, "morning", true));