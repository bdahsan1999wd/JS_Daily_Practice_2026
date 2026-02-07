/**
 * PROBLEM–03: 🍔 Food Delivery Charge Optimizer

 * Logic: Calculates delivery fee based on distance, order value, and weather conditions.
 */

function calculateDeliveryCharge(orderAmount, distance, isRaining) {
    // --- STEP 1: INPUT VALIDATION ---
    if (typeof orderAmount !== 'number' || orderAmount <= 0 || typeof distance !== 'number' || distance <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK FOR FREE DELIVERY ---
    // Rule: Free if order > 1000 and distance is less than 3km
    if (orderAmount > 1000 && distance < 3) {
        return 0;
    }

    // --- STEP 3: CALCULATE DISTANCE CHARGE ---
    let deliveryFee = 40; // Base charge for first 2km
    if (distance > 2) {
        const extraKM = distance - 2;
        deliveryFee += (extraKM * 10); // 10 TK per km after 2km
    }

    // --- STEP 4: APPLY WEATHER SURCHARGE ---
    // If it is raining, add a flat 50 TK surcharge
    if (isRaining === true) {
        deliveryFee += 50;
    }

    return deliveryFee;
}

// --- EXAMPLE USAGE ---
console.log(calculateDeliveryCharge(1200, 2, false));
console.log(calculateDeliveryCharge(500, 5, true));