/**
 * 🐟 PROBLEM–05: toggleAerator()

 * Logic: Controls pond oxygen levels based on biological density needs.
 */

function toggleAerator(oxygenLevel, fishDensity) {

    // --- STEP 1: VALIDATION ---
    if (
        typeof oxygenLevel !== 'number' || oxygenLevel < 0 || oxygenLevel > 15 ||
        typeof fishDensity !== 'number' || fishDensity < 0 || fishDensity > 500
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CORE LOGIC ---
    // Condition 1: Critical oxygen level (Immediate danger).
    if (oxygenLevel < 4.0) {
        return true;
    }

    // Condition 2: Borderline oxygen level.
    // Only turn on if the fish density is high (competing for oxygen).
    if (oxygenLevel >= 4.0 && oxygenLevel <= 6.0) {
        return fishDensity > 50;
    }

    // Condition 3: Optimal oxygen level.
    // If oxygen is above 6.0, keep aerator off to save electricity.
    return false;
}

// --- EXAMPLE USAGE ---
console.log(toggleAerator(5.2, 60));
console.log(toggleAerator(5.2, 30));
console.log(toggleAerator(8.0, 100));