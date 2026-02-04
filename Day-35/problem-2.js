/*
=> PROBLEM–02: 🚕 Dynamic Ride-Fare Estimator

=> Logic: Multi-stage surge pricing. The weather surge is compounded (calculated after the peak hour surge).

*/

function calculateFare(distance, timeOfDay, isRainy) {
    // --- STEP 1: VALIDATION ---
    // Distance must be positive; time must be between 0 and 23
    if (
        typeof distance !== 'number' || distance <= 0 ||
        typeof timeOfDay !== 'number' || timeOfDay < 0 || timeOfDay > 23 ||
        typeof isRainy !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: BASE CALCULATION ---
    let totalFare = 50 + (distance * 20); // Base fee + distance cost

    // --- STEP 3: PEAK HOUR SURGE (30%) ---
    // Ranges: 8-11 or 18-21 inclusive
    if ((timeOfDay >= 8 && timeOfDay <= 11) || (timeOfDay >= 18 && timeOfDay <= 21)) {
        totalFare *= 1.3;
    }

    // --- STEP 4: WEATHER SURGE (20%) ---
    // Calculated based on the fare AFTER peak surge is applied
    if (isRainy) {
        totalFare *= 1.2;
    }

    // --- STEP 5: FINAL FORMATTING ---
    // Returns the number rounded to 2 decimal places
    return parseFloat(totalFare.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateFare(10, 9, false));
console.log(calculateFare(5, 20, true));