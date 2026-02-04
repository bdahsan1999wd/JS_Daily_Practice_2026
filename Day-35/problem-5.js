/*
=> PROBLEM–05: ✈️ Smart Travel Luggage Tracker

=> Logic: Security-first status. Specific items (Powerbanks/Lighters) dictate the luggage status regardless of weight limit compliance.

*/

function luggageChecker(weight, items, isBusinessClass) {
    // --- STEP 1: VALIDATION ---
    if (
        typeof weight !== 'number' || weight <= 0 ||
        !Array.isArray(items) || items.length === 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE OVERWEIGHT CHARGES ---
    const limit = isBusinessClass ? 35 : 20;
    let extraCharge = 0;

    if (weight > limit) {
        extraCharge = (weight - limit) * 500;
    }

    // --- STEP 3: STATUS DETERMINATION ---
    let status = "Approved";
    // Check if security-restricted items exist in the array
    if (items.includes("Powerbank") || items.includes("Lighter")) {
        status = "Hand Luggage Only";
    }

    // --- STEP 4: SUGGESTION LOGIC ---
    const suggestion = weight > 50 ? "Send via Cargo" : "Ready to Fly";

    return {
        extraCharge: extraCharge,
        status: status,
        suggestion: suggestion
    };
}

// --- EXAMPLE USAGE ---
console.log(luggageChecker(25, ["Clothes"], false));
console.log(luggageChecker(15, ["Phone", "Lighter"], true));