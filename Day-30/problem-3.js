function pumpScheduler(waterLevel, requiredWater, supplyAvailable, timeOfDay) {
    
    // ==========================
    // Step 1: Input Validation
    // ==========================
    // Ensure all inputs are within allowed ranges
    if (
        typeof waterLevel !== "number" || waterLevel < 0 || waterLevel > 100 ||  // 0–100%
        typeof requiredWater !== "number" || requiredWater <= 0 ||                // must be positive
        typeof supplyAvailable !== "boolean" ||                                   // must be boolean
        !["day", "night"].includes(timeOfDay)                                     // must be "day" or "night"
    ) {
        return "Invalid Input"; // reject invalid inputs
    }

    // ==========================
    // Step 2: Initialize Pump State
    // ==========================
    let pumpOn = false;      // default: pump is OFF
    let flowPercent = 0;     // default flow: 0%

    // ==========================
    // Step 3: Decide Whether to Start Pump
    // ==========================
    // Start pump only if water level is below 50% AND supply is available
    if (waterLevel < 50 && supplyAvailable) {
        pumpOn = true;        // turn pump ON
        flowPercent = 100;    // full flow by default

        // Reduce flow at night to save water
        if (timeOfDay === "night") {
            flowPercent = 50;
        }
    }

    // ==========================
    // Step 4: Return Result
    // ==========================
    return { pumpOn, flowPercent };
}

// --- Example Usage ---
console.log(pumpScheduler(30, 200, true, "night"));