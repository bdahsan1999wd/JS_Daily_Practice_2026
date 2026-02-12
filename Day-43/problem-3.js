// 🧩 PROBLEM–03: ⚡ Desko Load Shedding AI

// Logic: A smart grid balancer that protects essential services (hospitals) unless a total grid collapse is imminent.

function shouldCutPower(demandMW, supplyMW, isHospitalArea) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure power units are positive numbers (MW)-----> Megawatts
    if (typeof demandMW !== 'number' || demandMW <= 0 ||
        typeof supplyMW !== 'number' || supplyMW <= 0 ||
        typeof isHospitalArea !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: ESSENTIAL SERVICE PROTECTION ---
    // Hospitals are shielded from power cuts
    // They are only disconnected if demand is > 200% of available supply
    if (isHospitalArea) {
        return demandMW > (supplyMW * 2);
    }

    // --- STEP 3: GRID DEFICIT CHECKS ---
    // Case A: If there is a massive numerical gap (> 100MW)
    if (demandMW > (supplyMW + 100)) return true;

    // Case B: If the relative gap is > 20%, cut power to prevent total grid failure
    if (demandMW >= (supplyMW * 1.20)) return true;

    // Default: Supply is sufficient to meet the current demand
    return false;
}

// --- EXAMPLE USAGE ---
console.log(shouldCutPower(1200, 1000, false));
console.log(shouldCutPower(1200, 1000, true));
console.log(shouldCutPower(2500, 1000, true));