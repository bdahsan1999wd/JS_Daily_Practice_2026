function fridgeController(currentTemp, doorOpen, foodLoad) {
    
    // --- Input Validation ---
    if (typeof currentTemp !== "number" || typeof doorOpen !== "boolean" || typeof foodLoad !== "number" || foodLoad < 0) {
        return "Invalid Input"; // return error if invalid input
    }

    const TARGET_TEMP = 0; // default target temperature
    let alertMsg = null;

    // Door open → show alert
    if (doorOpen) {
        alertMsg = "Door open!";
    }

    // More food → slightly more cooling (for demonstration purposes, keeping targetTemp same)
    let targetTemp = TARGET_TEMP;

    return {
        targetTemp,
        alert: alertMsg
    };
}

// --- Example Usage ---
console.log(fridgeController(4, true, 12));