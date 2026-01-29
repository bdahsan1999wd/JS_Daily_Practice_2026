function controlAC(temp, humidity, peopleCount, timeOfDay) {

    // -------------------------
    // Step 1: Input validation
    // -------------------------
    // Ensure all numbers are valid and timeOfDay is correct
    if (
        typeof temp !== "number" ||
        typeof humidity !== "number" ||
        typeof peopleCount !== "number" ||
        !["day", "night"].includes(timeOfDay)
    ) {
        return "Invalid Input";
    }

    // -------------------------
    // Step 2: Initialize default AC state
    // -------------------------
    let acOn = true;          // AC is on by default
    let mode = "cool";        // Default cooling mode
    let powerLevel = 3;       // Default power level (scale 1–5)

    // -------------------------
    // Step 3: Temperature control
    // -------------------------
    if (temp < 24) acOn = false; // Turn off AC if temperature is low

    // -------------------------
    // Step 4: Humidity control
    // -------------------------
    if (humidity > 70) mode = "dry"; // High humidity → dry mode

    // -------------------------
    // Step 5: People count influence
    // -------------------------
    if (peopleCount > 5) powerLevel += 1; // More people → increase cooling

    // -------------------------
    // Step 6: Night mode adjustment
    // -------------------------
    // Reduce power by 1 at night but keep minimum 1
    if (timeOfDay === "night") powerLevel = Math.max(1, powerLevel - 1);

    // -------------------------
    // Step 7: Return final AC control state
    // -------------------------
    return { acOn, mode, powerLevel };
}

// Example usage
console.log(controlAC(30, 75, 6, "night"));