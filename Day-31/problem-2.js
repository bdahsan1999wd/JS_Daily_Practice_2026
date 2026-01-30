function bathVentilation(humidity, peopleInBathroom, timeOfDay) {

    // --- Input Validation ---
    // humidity must be number between 0–100
    // peopleInBathroom must be number >= 0
    // timeOfDay must be "day" or "night"
    if (typeof humidity !== "number" || humidity < 0 || humidity > 100 ||
        typeof peopleInBathroom !== "number" || peopleInBathroom < 0 ||
        (timeOfDay !== "day" && timeOfDay !== "night")) {
        return "Invalid Input"; // Return error if any input is invalid
    }

    // Initialize fan status and speed
    let fanOn = false;
    let speedPercent = 0;

    // --- Fan control based on humidity ---
    if (humidity > 70) {
        fanOn = true;       // Turn fan ON
        speedPercent = 100; // Default speed at 100%
    }

    // --- Adjust speed if more than 2 people ---
    if (peopleInBathroom > 2 && fanOn) {
        // Already 100%, but logic placeholder for scaling
        speedPercent = 100;
    }

    // --- Night mode adjustment ---
    if (timeOfDay === "night" && fanOn) {
        speedPercent = speedPercent / 2; // Reduce speed by 50%
    }

    // Return final fan status and speed
    return {
        fanOn,
        speedPercent
    };
}

// --- Example Usage ---
console.log(bathVentilation(80, 3, "night"));