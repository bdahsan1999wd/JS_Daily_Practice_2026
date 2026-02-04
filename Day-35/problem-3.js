/*
=> PROBLEM–03: 🎟️ Movie Ticket Multi-Tier Booking

=> Logic: Sequential discounting. Membership discount is applied as the final step on the already discounted price.

*/

function movieTicketPrice(age, showTime, hasMemberCard) {
    // --- STEP 1: VALIDATION ---
    if (
        typeof age !== 'number' || age <= 0 ||
        typeof showTime !== 'number' || showTime < 0 || showTime > 23 ||
        typeof hasMemberCard !== 'boolean'
    ) {
        return "Invalid Input";
    }

    let price = 500;

    // --- STEP 2: AGE-BASED DISCOUNT ---
    if (age < 12) {
        price *= 0.5; // 50% discount
    } else if (age > 60) {
        price *= 0.7; // 30% discount
    }

    // --- STEP 3: MATINEE DISCOUNT ---
    // Fixed subtraction of 100 TK for 12:00 - 16:00 inclusive
    if (showTime >= 12 && showTime <= 16) {
        price -= 100;
    }

    // --- STEP 4: MEMBERSHIP DISCOUNT ---
    // 10% off the final calculated total
    if (hasMemberCard) {
        price *= 0.9;
    }

    return price;
}

// --- EXAMPLE USAGE ---
console.log(movieTicketPrice(10, 14, false));
console.log(movieTicketPrice(30, 19, true));