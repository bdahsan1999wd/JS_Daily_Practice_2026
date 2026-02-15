/**
 * PROBLEM–03: 🚇 Metro Card Balance Alert

 * This function determines if a commuter can enter the metro gate.
 * It follows a specific hierarchy: Proceed > Low Balance Warning > Insufficient.
 */

function checkMetroBalance(balance, zoneDistance) {

    // --- STEP 1: STRICT INPUT VALIDATION ---
    // Both balance and zoneDistance must be non-negative numbers.
    // also check for NaN to prevent math errors.
    if (
        typeof balance !== "number" ||
        Number.isNaN(balance) ||
        balance < 0 ||
        typeof zoneDistance !== "number" ||
        Number.isNaN(zoneDistance) ||
        zoneDistance < 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TRIP COST ---
    // Base Fare: $2.50
    // Additional: $0.50 for every zone traveled.
    const tripCost = 2.50 + (0.50 * zoneDistance);

    // --- STEP 3: LOGIC HIERARCHY ---

    // 1st Priority: Can the user pay for the trip?
    // If balance is greater than or equal to the cost, they are good to go.
    if (balance >= tripCost) {
        return "Proceed";
    }

    // 2nd Priority: Can't pay, but is the balance above the $5 threshold?
    // Even if they can't afford the trip (like balance 5.50 vs cost 12.50),
    // the system triggers a "Low Balance" alert instead of "Insufficient".
    else if (balance > 5.00) {
        return "Low Balance";
    }

    // 3rd Priority: If balance is $5.00 or less AND they can't afford the trip.
    else {
        return "Insufficient";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkMetroBalance(10, 5));
console.log(checkMetroBalance(5.50, 20));
console.log(checkMetroBalance(4, 10));
console.log(checkMetroBalance("10", -2));