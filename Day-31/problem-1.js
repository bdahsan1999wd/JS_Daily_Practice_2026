function fridgeTempControl(currentTemp, doorOpen, foodLoad) {

    // --- Input Validation ---
    // Check if currentTemp is number, doorOpen is boolean, foodLoad >= 0
    if (typeof currentTemp !== "number" || typeof doorOpen !== "boolean" || typeof foodLoad !== "number" || foodLoad < 0) {
        return "Invalid Input"; // return error if inputs are invalid
    }

    const TARGET_TEMP = 4; // Default fridge target temperature in °C
    let coolingIncrease = 0; // Initialize extra cooling based on conditions

    // Door open → add 2°C extra cooling
    if (doorOpen) {
        coolingIncrease += 2; // Increase cooling if fridge door is open
    }

    // More food → increase cooling proportionally (1°C per 5kg of food)
    coolingIncrease += Math.floor(foodLoad / 5);

    // Maximum cooling reduction cannot exceed 10°C
    if (coolingIncrease > 10) coolingIncrease = 10;

    // Calculate the final target temperature
    let targetTemp = TARGET_TEMP - coolingIncrease;

    // Alert message if the door is open
    let alertMsg = doorOpen ? "Door open!" : null;

    // Return final temperature and alert
    return {
        targetTemp,
        alert: alertMsg
    };
}

// --- Example Usage ---
console.log(fridgeTempControl(6, true, 15));