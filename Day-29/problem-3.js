function controlMotor(waterLevel, isMunicipalWaterAvailable) {

    // -------------------------
    // Step 1: Input validation
    // -------------------------
    // Ensure waterLevel is a number in range 0–100
    // Ensure isMunicipalWaterAvailable is a boolean
    if (
        typeof waterLevel !== "number" || waterLevel < 0 || waterLevel > 100 ||
        typeof isMunicipalWaterAvailable !== "boolean"
    ) {
        return "Invalid Input"; // Invalid input → stop execution
    }

    // -------------------------
    // Step 2: Initialize motor state variables
    // -------------------------
    // motorOn → true if motor should be running
    // status → descriptive message for current motor action
    let motorOn = false;      // Default: motor off
    let status = "waiting";   // Default: waiting (no action)

    // -------------------------
    // Step 3: Evaluate water tank level and supply
    // -------------------------

    if (waterLevel > 90) {
        // Case 1: Tank nearly full
        // → Stop motor to prevent overflow
        motorOn = false;
        status = "full";
    } else if (waterLevel < 30 && isMunicipalWaterAvailable) {
        // Case 2: Tank low AND water supply is available
        // → Start motor to fill the tank
        motorOn = true;
        status = "filling";
    } else {
        // Case 3: Either waterLevel is moderate OR supply not available
        // → Keep motor off and wait
        motorOn = false;
        status = "waiting";
    }


    // -------------------------
    // Step 4: Return motor control state
    // -------------------------

    // Returns an object with:

    // - motorOn: boolean (true = motor running)

    // - status: string ("filling" | "full" | "waiting")

    return { motorOn, status };
}

// -------------------------
// Example usage
// -------------------------
console.log(controlMotor(25, true));