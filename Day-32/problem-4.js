/**
 * Goal: Supply water based on mode (Emergency or Normal) and check tank levels.
 */

function waterDistributor(currentLevel, dailyUsage, emergencyMode) {

    // --- STEP 1: VALIDATION ---
    // We ensure that water level and usage are numbers and not negative.
    // We verify that 'emergencyMode' is a boolean.
    if (typeof currentLevel !== 'number' || currentLevel < 0 ||
        typeof dailyUsage !== 'number' || dailyUsage < 0 ||
        typeof emergencyMode !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE REQUIRED SUPPLY ---
    // Rule: In emergency mode, we only distribute 50% (0.5) of the standard daily usage.
    let requiredAmount = emergencyMode ? (dailyUsage * 0.5) : dailyUsage;

    // --- STEP 3: CHECK FOR LOW WATER ALERT ---
    // If the water currently in the tank is less than what we need to supply, trigger an alert.
    let alertMsg = (currentLevel < requiredAmount) ? "Low Water" : "Normal";

    // --- STEP 4: CALCULATE ACTUAL SUPPLY AND REMAINING ---
    // We use Math.min() because we cannot supply more water than the tank actually contains.
    let suppliedAmount = Math.min(currentLevel, requiredAmount);

    // Calculate what is left in the tank after the supply is taken out.
    let remainingInTank = Math.max(0, currentLevel - suppliedAmount);

    // --- STEP 5: RETURN DATA ---
    return {
        supplied: suppliedAmount,
        remaining: remainingInTank,
        alert: alertMsg
    };
}

// --- EXAMPLE USAGE ---
console.log(waterDistributor(250, 400, true));
console.log(waterDistributor(100, 300, false));