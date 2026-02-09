/**
 * PROBLEM–02: 🚔 Smart Traffic Violation System

 * Logic: Calculates fines based on violation type, applies repeat offense surcharges,
 * and includes a mandatory digital processing fee.
 */

function generateTrafficFine(violationType, isRepeatOffense) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure violationType is a string and isRepeatOffense is a boolean
    if (typeof violationType !== 'string' || typeof isRepeatOffense !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE BASE FINE ---
    // Assign fine amounts based on the specific type of violation
    let baseFine = 0;
    if (violationType === "Speeding") {
        baseFine = 2000;
    } else if (violationType === "Signal Jump") {
        baseFine = 1500;
    } else if (violationType === "Wrong Side") {
        baseFine = 3000;
    } else {
        // If the violation type is not recognized, return invalid
        return "Invalid Input";
    }

    // --- STEP 3: APPLY REPEAT OFFENSE PENALTY ---
    // If it's a repeat offense, add a 50% surcharge (baseFine * 0.5)
    let totalFine = baseFine;
    if (isRepeatOffense === true) {
        totalFine += (baseFine * 0.50);
    }

    // --- STEP 4: ADD DIGITAL PROCESSING FEE ---
    // A flat fee of 100 TK is added to the final amount
    totalFine += 100;

    // Return the final calculated fine amount
    return totalFine;
}

// --- EXAMPLE USAGE ---
console.log(generateTrafficFine("Speeding", false));
console.log(generateTrafficFine("Signal Jump", true));
console.log(generateTrafficFine("Wrong Side", false));
console.log(generateTrafficFine("Parking", false));