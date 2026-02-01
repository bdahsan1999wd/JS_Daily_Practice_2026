// PROBLEM–03: 🚗 Smart Ride Fare Calculator

// Goal: Calculate ride fare considering base price, distance, surge, and promos.

function fareCalculator(distance, isPeakHour, promoCode) {

    // --- STEP 1: VALIDATION ---
    // Distance must be a positive number greater than 0.
    // Peak hour must be boolean, and promoCode must be a string.
    if (typeof distance !== 'number' || distance <= 0 ||
        typeof isPeakHour !== 'boolean' || typeof promoCode !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE BASE COST ---
    // Rule: Base starting price is 50 TK. Every kilometer adds 20 TK.
    let baseFare = 50 + (distance * 20);

    // --- STEP 3: APPLY PEAK HOUR SURGE ---
    // Rule: If it's peak hour, increase the entire base fare by 30% (0.30).
    if (isPeakHour) {
        let surgeAmount = baseFare * 0.30;
        baseFare = baseFare + surgeAmount;
    }

    // --- STEP 4: APPLY PROMO DISCOUNT ---
    // Rule: If the user provides "SAVE10", subtract 10 TK from the total.
    if (promoCode === "SAVE10") {
        baseFare = baseFare - 10;
    }

    // --- STEP 5: SAFETY CHECK & RETURN ---
    // We use Math.max(0, ...) so that a discount doesn't make the fare negative.
    let finalFare = Math.max(0, baseFare);

    return {
        fare: finalFare,
        surgeApplied: isPeakHour
    };
}

// --- EXAMPLE USAGE ---
console.log(fareCalculator(10, true, "SAVE10"));
console.log(fareCalculator(5, false, "NONE"));