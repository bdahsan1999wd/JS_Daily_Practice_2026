// 🧩 PROBLEM–01: 🗳️ Election Booth Security

// Logic: A hierarchical decision system where physical violence (clashes) overrides all other environmental risks.

function getBoothStatus(voterTurnout, isRemoteArea, reportedClashes) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure numbers are non-negative integers and types are correct
    if (
        typeof voterTurnout !== 'number' || voterTurnout < 0 || !Number.isInteger(voterTurnout) ||
        typeof isRemoteArea !== 'boolean' ||
        typeof reportedClashes !== 'number' || reportedClashes < 0 || !Number.isInteger(reportedClashes)
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: EMERGENCY OVERRIDE ---
    // If clashes exceed 3, it's a critical safety failure; ignore other parameters
    if (reportedClashes > 3) {
        return "Emergency Lockdown";
    }

    // --- STEP 3: RISK EVALUATION (HIGH ALERT) ---
    // Check for moderate violence (1-3 clashes)
    // OR high-density crowds in difficult-to-monitor remote locations
    if ((reportedClashes >= 1 && reportedClashes <= 3) || (isRemoteArea && voterTurnout > 500)) {
        return "High Alert";
    }

    // --- STEP 4: DEFAULT STATE ---
    // If no specific risk triggers are met, the booth is considered stable
    return "Normal";
}

// --- EXAMPLE USAGE ---
console.log(getBoothStatus(600, true, 0));
console.log(getBoothStatus(200, false, 4));
console.log(getBoothStatus(300, false, 0));