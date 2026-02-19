/**
 * 🏥 PROBLEM–02: getEmergencyAction()

 * Logic: A prioritized decision system for medical transfers based on vitals and resources.
 */

function getEmergencyAction(oxygenSat, heartRate, hasAmbulance) {

    // --- STEP 1: VALIDATION ---
    // oxygenSat (0-100), heartRate (positive), hasAmbulance (boolean)
    if (
        typeof oxygenSat !== 'number' || oxygenSat < 0 || oxygenSat > 100 ||
        typeof heartRate !== 'number' || heartRate <= 0 ||
        typeof hasAmbulance !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: EVALUATE CRITICAL STATUS ---
    const isCritical = oxygenSat < 90 || heartRate > 120;

    if (isCritical) {
        // If critical but no transport is available
        if (!hasAmbulance) {
            return "Wait for Transport";
        }
        return "Critical";
    }

    // --- STEP 3: EVALUATE STABILITY ---
    if (oxygenSat >= 95 && heartRate >= 60 && heartRate <= 100) {
        return "Stable";
    }

    // --- STEP 4: FALLBACK ---
    return "Monitor";
}

// --- EXAMPLE USAGE ---
console.log(getEmergencyAction(88, 130, true));
console.log(getEmergencyAction(88, 130, false));
console.log(getEmergencyAction(98, 75, true));