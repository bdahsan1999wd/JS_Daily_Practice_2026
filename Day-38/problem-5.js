/**
 * PROBLEM–05: 🪴 Smart Plant Watering System

 * Logic: Custom watering needs based on plant species and environment sensors.
 */

function plantWateringGuide(plantType, temperature, soilMoisture) {

    // --- STEP 1: INPUT VALIDATION ---
    // Soil moisture must be a percentage between 0 and 100
    if (typeof plantType !== 'string' || typeof temperature !== 'number' ||
        typeof soilMoisture !== 'number' || soilMoisture < 0 || soilMoisture > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: CACTUS SPECIFIC LOGIC ---
    if (plantType === "Cactus") {
        if (soilMoisture < 5) {
            return { waterAmount: 100, frequency: "Once a week" };
        } else {
            return { waterAmount: 0, frequency: "No water needed" };
        }
    }
    // --- STEP 3: LOGIC FOR OTHER PLANTS ---
    else {
        // High temperature priority
        if (temperature > 35) {
            return { waterAmount: 500, frequency: "Daily" };
        }
        // Dry soil check
        else if (soilMoisture < 20) {
            return { waterAmount: 250, frequency: "Every 2 days" };
        }
        // Moisture is sufficient
        else {
            return { waterAmount: 0, frequency: "No water needed" };
        }
    }
}

// --- EXAMPLE USAGE ---
console.log(plantWateringGuide("Cactus", 40, 2));
console.log(plantWateringGuide("Rose", 38, 30));