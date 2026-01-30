function seatHeaterControl(currentTemp, desiredTemp, seatOccupied) {
    
    // --- Input Validation ---
    if (typeof currentTemp !== "number" || typeof desiredTemp !== "number" || typeof seatOccupied !== "boolean") {
        return "Invalid Input"; // return error if invalid input
    }

    let heaterOn = false;

    // Heater only ON if seat is occupied
    if (seatOccupied) heaterOn = true;

    // Gradually adjust temperature: 1°C per minute
    let adjustedTemp = currentTemp;
    if (heaterOn) {
        adjustedTemp += 1; // increase temperature gradually
    }

    // Ensure temperature stays within min 20°C and max desiredTemp
    if (adjustedTemp < 20) adjustedTemp = 20;
    if (adjustedTemp > desiredTemp) adjustedTemp = desiredTemp;

    return {
        heaterOn,
        currentTemp: adjustedTemp
    };
}

// --- Example Usage ---
console.log(seatHeaterControl(18, 24, true));