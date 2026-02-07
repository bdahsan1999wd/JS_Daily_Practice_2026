/**
 * PROBLEM–05: 📸 Event Photography Package

 * Logic: Calculates total cost, drone fees, and staff required for specific events.
 */

function photographyQuote(hours, eventType, wantsDrone) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof hours !== 'number' || hours <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: BASE HOURLY RATE ---
    let totalQuote = hours * 2000;

    // --- STEP 3: DRONE SURCHARGE ---
    if (wantsDrone === true) {
        totalQuote += 5000;
    }

    // --- STEP 4: ASSIGN STAFF COUNT ---
    // Weddings require a team of 3; others only 1
    const photographerCount = (eventType === "Wedding") ? 3 : 1;

    // --- STEP 5: BUNDLE DISCOUNT ---
    // 15% discount for long bookings (over 8 hours)
    if (hours > 8) {
        totalQuote = totalQuote * 0.85;
    }

    // --- STEP 6: RETURN PACKAGE OBJECT ---
    return {
        totalQuote: totalQuote,
        photographerCount: photographerCount
    };
}

// --- EXAMPLE USAGE ---
console.log(photographyQuote(5, "Birthday", false));
console.log(photographyQuote(10, "Wedding", true));