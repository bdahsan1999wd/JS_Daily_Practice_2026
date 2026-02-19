/**
 * 🚆 PROBLEM–05: getTravelRoute()

 * Logic: Calculations with mandatory validation and tiered age-based discounts.
 */

function getTravelRoute(passengerAge, hasNID, travelClass) {

    // --- STEP 1: STRICT VALIDATION ---
    const validClasses = ["AC", "Non-AC"];
    if (
        !Number.isInteger(passengerAge) || passengerAge < 1 || passengerAge > 110 ||
        typeof hasNID !== 'boolean' ||
        !validClasses.includes(travelClass)
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: MANDATORY NID CHECK ---
    if (!hasNID) {
        return "Invalid Input"; // Cannot travel without NID registration
    }

    // --- STEP 3: DETERMINE BASE FARE ---
    let fare = (travelClass === "AC") ? 500 : 200;

    // --- STEP 4: APPLY DISCOUNTS ---
    if (passengerAge >= 60) {
        fare = fare * 0.5; // 50% discount for Seniors
    }
    else if (passengerAge < 12) {
        fare = fare * 0.7; // 30% discount for Children
    }

    return fare;
}

// --- EXAMPLE USAGE ---
console.log(getTravelRoute(65, true, "AC"));
console.log(getTravelRoute(25, true, "Non-AC"));
console.log(getTravelRoute(10, false, "AC"));