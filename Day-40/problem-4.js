/**
 * PROBLEM–04: 🏥 Emergency Bed Allocation

 * Logic: An automated triage system that categorizes patients based on
 * blood oxygen levels, age, and emergency bypass codes.
 */

function allocateEmergencyBed(oxygenLevel, age, hasEmergencyCode) {

    // --- STEP 1: INPUT VALIDATION ---
    // oxygenLevel must be between 0 and 100.
    // age must be a non-negative number.
    // hasEmergencyCode must be a boolean.
    if (
        typeof oxygenLevel !== 'number' || oxygenLevel < 0 || oxygenLevel > 100 ||
        typeof age !== 'number' || age < 0 ||
        typeof hasEmergencyCode !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CRITICAL PRIORITY LOGIC ---
    // Rule: Immediate attention if oxygen is below 90% OR a medical emergency code is active.
    if (oxygenLevel < 90 || hasEmergencyCode === true) {
        return "Critical";
    }

    // --- STEP 3: HIGH PRIORITY LOGIC ---
    // Rule: Oxygen is in the "warning zone" (90-94) AND the patient is elderly (over 70).
    else if (oxygenLevel >= 90 && oxygenLevel <= 94 && age > 70) {
        return "High";
    }

    // --- STEP 4: STABLE STATUS ---
    // For all other cases where oxygen is safe or the patient is young enough to monitor.
    else {
        return "Stable";
    }
}

// --- EXAMPLE USAGE ---
console.log(allocateEmergencyBed(88, 45, false));
console.log(allocateEmergencyBed(92, 75, false));
console.log(allocateEmergencyBed(98, 30, true));
console.log(allocateEmergencyBed(98, 25, false));
console.log(allocateEmergencyBed(105, 40, false));