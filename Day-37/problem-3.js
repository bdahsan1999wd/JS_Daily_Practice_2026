/**
 * PROBLEM–03: 🔌 Load Shedding Calculator

 * Logic: Uses electrical capacity formulas with an efficiency penalty for old batteries.
 */

function ipsBatteryBackup(batteryCapacity, totalLoad, isNewBattery) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof batteryCapacity !== 'number' || batteryCapacity <= 0 ||
        typeof totalLoad !== 'number' || totalLoad <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE THEORETICAL BACKUP ---
    // Formula: (Ah * 12V) / Load in Watts
    let backupTime = (batteryCapacity * 12) / totalLoad;

    // --- STEP 3: ADJUST FOR EFFICIENCY ---
    // If the battery is old, it only provides 80% of its capacity (20% loss)
    if (!isNewBattery) {
        backupTime = backupTime * 0.8;
    }

    // --- STEP 4: FORMATTING ---
    // Rounding to 2 decimal places to keep it clean (e.g., 4.83 instead of 4.83333...)
    return Number(backupTime.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(ipsBatteryBackup(100, 200, true));
console.log(ipsBatteryBackup(100, 200, false));