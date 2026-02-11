// 🧩 PROBLEM–02: 🚀 Mars Colony Suitability

// Logic: Uses a priority-based safety check where Radiation is the highest threat, followed by Oxygen levels and Temperature.

function checkMarsSuitability(oxygenLevel, temperature, radiationShield) {

    // --- STEP 1: INPUT VALIDATION ---
    if (
        typeof oxygenLevel !== 'number' || oxygenLevel < 0 || oxygenLevel > 100 ||
        typeof temperature !== 'number' ||
        typeof radiationShield !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: PRIORITY-BASED STATUS CHECK ---

    // Rule 1: Radiation is the highest priority threat
    if (radiationShield === false) {
        return { status: "Hostile", alert: "Radiation Exposure" };
    }

    // Rule 2: Oxygen is the second priority
    if (oxygenLevel < 18) {
        return { status: "Hostile", alert: "Oxygen Critical" };
    }

    // Rule 3: Temperature must be within -60 to 0 degrees Celsius
    if (temperature < -60 || temperature > 0) {
        return { status: "Hostile", alert: "Temperature Extreme" };
    }

    // Default: System is stable if all conditions pass
    return { status: "Livable", alert: "System Stable" };
}

// --- EXAMPLE USAGE ---
console.log(checkMarsSuitability(20, -30, true));
console.log(checkMarsSuitability(15, -40, true));
console.log(checkMarsSuitability(25, -10, false));