/**
 * 🚔 PROBLEM–02: dispatchPatrol()

 * Logic: Uses logical OR/AND operators to prioritize high-risk scenarios.
 */

function dispatchPatrol(riskLevel, hasDisturbance) {

    // --- STEP 1: VALIDATION ---
    // Risk level must be 1-10 and hasDisturbance must be boolean.
    if (typeof riskLevel !== 'number' || riskLevel < 1 || riskLevel > 10 || typeof hasDisturbance !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: EVALUATE ALERTS ---
    // If there's an active disturbance OR the risk is critically high (9-10)
    if (hasDisturbance === true || riskLevel > 8) {
        return "High Alert";
    }
    // If no disturbance but the risk is moderate (5-8)
    else if (riskLevel >= 5) {
        return "Normal Patrol";
    }
    // All other safe/low-risk conditions
    else {
        return "Standby";
    }
}

// --- EXAMPLE USAGE ---
console.log(dispatchPatrol(9, false));
console.log(dispatchPatrol(6, false));
console.log(dispatchPatrol(12, true));
console.log(dispatchPatrol(3, false));