/**
 * Goal: Check if gaming time is exceeded and apply weekend bonuses.
 */

function gamingLimiter(hoursPlayed, maxAllowed, weekend) {

    // --- STEP 1: VALIDATION ---
    // We check that 'hoursPlayed' and 'maxAllowed' are valid positive numbers.
    // We also ensure that the 'weekend' input is a proper boolean (true/false).
    if (typeof hoursPlayed !== 'number' || hoursPlayed < 0 ||
        typeof maxAllowed !== 'number' || maxAllowed < 0 ||
        typeof weekend !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY WEEKEND BONUS ---
    // Rule: If it is the weekend, the user gets an extra 2 hours added to their limit.
    let finalAllowedLimit = maxAllowed + (weekend ? 2 : 0);

    // --- STEP 3: CHECK ACCESS STATUS ---
    // Rule: If the hours already played are greater than or equal to the limit, LOCK the system.
    let currentAccess = (hoursPlayed >= finalAllowedLimit) ? "Locked" : "Open";

    // --- STEP 4: CALCULATE REMAINING TIME ---
    // We subtract the hours played from the total limit allowed.
    // Math.max(0, ...) ensures that if they went over the limit, we return 0 instead of a negative.
    let hoursLeft = Math.max(0, finalAllowedLimit - hoursPlayed);

    // --- STEP 5: RETURN DATA ---
    return {
        access: currentAccess,
        remainingHours: hoursLeft
    };
}

// --- EXAMPLE USAGE ---
console.log(gamingLimiter(6, 4, true));
console.log(gamingLimiter(3, 5, false));