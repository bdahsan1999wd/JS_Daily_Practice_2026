/**
 * 🛰️ PROBLEM–04: manageIrrigation()

 * Logic: Environmental automation based on sensor data and resource availability.
 */

function manageIrrigation(soilMoisture, isSunny, waterReserveLitres) {

    // --- STEP 1: VALIDATION ---
    if (
        typeof soilMoisture !== 'number' || soilMoisture < 0 || soilMoisture > 100 ||
        typeof isSunny !== 'boolean' ||
        typeof waterReserveLitres !== 'number' || waterReserveLitres < 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK CRITICAL WATER LEVELS ---
    if (waterReserveLitres < 100) {
        return "Low Water Level";
    }

    // --- STEP 3: IRRIGATION DECISION ---
    if (soilMoisture < 30 && waterReserveLitres > 500) {
        // If it's sunny, crops need more water due to evaporation
        return isSunny ? "Full Irrigation" : "Controlled Drip";
    }

    // --- STEP 4: DEFAULT ACTION ---
    return "No Action";
}

// --- EXAMPLE USAGE ---
console.log(manageIrrigation(20, true, 1000));
console.log(manageIrrigation(20, false, 800));
console.log(manageIrrigation(40, true, 50));