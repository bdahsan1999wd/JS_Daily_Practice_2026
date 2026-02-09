/**
 * PROBLEM–05: 🌳 Forest Protection (Pollution Alert)

 * Logic: Monitors Air Quality Index (AQI) and calculates environmental fines,
 * applying double penalties for industrial zones during pollution spikes.
 */

function checkPollutionLevel(aqiValue, isIndustrialZone) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure aqiValue is a non-negative number
    // Ensure isIndustrialZone is a boolean
    if (typeof aqiValue !== 'number' || aqiValue < 0 || typeof isIndustrialZone !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: INITIALIZE STATUS VARIABLES ---
    let alertStatus = "";
    let baseFine = 0;

    // --- STEP 3: DETERMINE ALERT LEVEL & BASE FINE ---
    // Safe Zone: No alert, no fine
    if (aqiValue < 100) {
        alertStatus = "Green";
        baseFine = 0;
    }
    // Warning Zone: Moderate pollution
    else if (aqiValue >= 101 && aqiValue <= 200) {
        alertStatus = "Yellow";
        baseFine = 5000;
    }
    // Danger Zone: Severe pollution
    else {
        alertStatus = "Red";
        baseFine = 20000;
    }

    // --- STEP 4: APPLY INDUSTRIAL PENALTY ---
    // Rule: If pollution is above safe levels (>100) in an industrial zone, double the fine
    let finalFine = baseFine;
    if (isIndustrialZone === true && aqiValue > 100) {
        finalFine = baseFine * 2;
    }

    // --- STEP 5: RETURN STATUS OBJECT ---
    return {
        alert: alertStatus,
        fineAmount: finalFine
    };
}

// --- EXAMPLE USAGE ---
console.log(checkPollutionLevel(150, false));
console.log(checkPollutionLevel(250, true));
console.log(checkPollutionLevel(85, true));
console.log(checkPollutionLevel(-5, false));