/**
 * PROBLEM–03: 🚗 Car Fuel Efficiency Checker

 * Logic: Calculates efficiency and checks if it meets highway or city standards.
 */

function checkFuelEfficiency(distanceKM, fuelLiters, isHighway) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof distanceKM !== 'number' || distanceKM <= 0 || typeof fuelLiters !== 'number' || fuelLiters <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE KM PER LITER ---
    const kmPerLiter = Number((distanceKM / fuelLiters).toFixed(2));

    // --- STEP 3: CHECK EFFICIENCY LEVEL ---
    let isEfficient = false;

    // Rule: Efficient if > 15 km/L on Highway OR > 10 km/L in City
    if (isHighway === true) {
        isEfficient = kmPerLiter > 15;
    } else {
        isEfficient = kmPerLiter > 10;
    }

    // --- STEP 4: RETURN SUMMARY OBJECT ---
    return {
        kmPerLiter: kmPerLiter,
        isEfficient: isEfficient
    };
}

// --- EXAMPLE USAGE ---
console.log(checkFuelEfficiency(100, 5, true));
console.log(checkFuelEfficiency(50, 6, false));