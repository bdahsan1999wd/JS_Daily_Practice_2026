/**
 * PROBLEM–02: 🚜 Smart Irrigation System

 * Logic: Decides whether to trigger irrigation based on real-time soil moisture,
 * rainfall status, and the specific needs of different crop types.
 */

function shouldWaterPlant(moistureLevel, isRaining, cropType) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure moistureLevel is a number between 0 and 100
    // Ensure cropType is either "Paddy" or "Wheat"
    // Ensure isRaining is a boolean
    if (
        typeof moistureLevel !== 'number' || moistureLevel < 0 || moistureLevel > 100 ||
        (cropType !== "Paddy" && cropType !== "Wheat") ||
        typeof isRaining !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: RAIN OVERRIDE ---
    // Rule: If it is currently raining, do not water, regardless of moisture level
    if (isRaining === true) {
        return { status: false, waterVolume: 0 };
    }

    // --- STEP 3: INITIALIZE VARIABLES ---
    let status = false;
    let waterVolume = 0;

    // --- STEP 4: CROP-SPECIFIC THRESHOLD LOGIC ---
    // Rule for Paddy: Requires high moisture (Water if < 40%)
    if (cropType === "Paddy" && moistureLevel < 40) {
        status = true;
        waterVolume = 500;
    }
    // Rule for Wheat: Requires less moisture (Water if < 20%)
    else if (cropType === "Wheat" && moistureLevel < 20) {
        status = true;
        waterVolume = 200;
    }

    // --- STEP 5: RETURN DECISION OBJECT ---
    // Returning an object allows the hardware controller to see both 'if' and 'how much'
    return {
        status: status,
        waterVolume: waterVolume
    };
}

// --- EXAMPLE USAGE ---
console.log(shouldWaterPlant(30, false, "Paddy"));
console.log(shouldWaterPlant(15, true, "Wheat"));
console.log(shouldWaterPlant(25, false, "Wheat"));
console.log(shouldWaterPlant(110, false, "Paddy"));