/**
 * PROBLEM–01: 🏨 Luxury Hotel Booking

 * Logic: Calculates room rates per night, adds breakfast, and applies long-stay discounts.
 */

function calculateHotelStay(nights, roomType, wantsBreakfast) {

    // --- STEP 1: INPUT VALIDATION ---
    // nights must be positive; roomType must be one of the two choices
    if (typeof nights !== 'number' || nights <= 0 || (roomType !== "Standard" && roomType !== "Deluxe")) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE BASE ROOM RATE ---
    let pricePerNight = (roomType === "Standard") ? 3000 : 5000;

    // --- STEP 3: ADD BREAKFAST SURCHARGE ---
    if (wantsBreakfast === true) {
        pricePerNight += 500;
    }

    // --- STEP 4: APPLY LONG-STAY DISCOUNT ---
    let totalBill = nights * pricePerNight;

    // Rule: More than 5 nights gets a 15% discount
    if (nights > 5) {
        totalBill = totalBill * 0.85;
    }

    return totalBill;
}

// --- EXAMPLE USAGE ---
console.log(calculateHotelStay(3, "Standard", true));
console.log(calculateHotelStay(6, "Deluxe", false));