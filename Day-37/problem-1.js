/**
 * PROBLEM–01: 🚌 Local Bus Fare Finder

 * Logic: Calculates fare based on a fixed base price for the first 5km,
   plus an incremental cost for extra distance, followed by category discounts.
 */

function localBusFare(distance, isStudent, isSeniorCitizen) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure distance is a valid number and greater than zero
    if (typeof distance !== 'number' || distance <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE GROSS FARE ---
    // The base fare is 20 TK for anything up to 5km
    let totalFare = 20;

    // If the distance is more than 5km, we calculate the additional cost
    if (distance > 5) {
        const extraDistance = distance - 5;
        // Every km after the initial 5km costs an extra 5 TK
        totalFare += extraDistance * 5;
    }

    // --- STEP 3: APPLY DISCOUNT LOGIC ---
    // Rule: Student discount (50%) has the highest priority.
    // If a passenger is both a Student and a Senior, only the Student discount applies.
    if (isStudent) {
        // Apply 50% discount (Passenger pays half)
        totalFare = totalFare * 0.5;
    }
    // Rule: If not a student, check if they are a Senior Citizen
    else if (isSeniorCitizen) {
        // Apply 30% discount (Passenger pays 70% of the fare)
        totalFare = totalFare * 0.7;
    }

    // --- STEP 4: RETURN FINAL RESULT ---
    // Return the calculated amount after all rules are applied
    return totalFare;
}

// --- EXAMPLE USAGE ---
console.log(localBusFare(10, true, false));
console.log(localBusFare(4, false, false));