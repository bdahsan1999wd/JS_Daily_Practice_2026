// 🧩 PROBLEM–01: 🍿 AI Content Moderator

// Logic: Determines accessibility based on a combination of age, parental control status, and content rating levels (G, PG, R).

function getMovieAccess(userAge, hasParentalControl, contentRating) {

    // --- STEP 1: INPUT VALIDATION ---
    // Check for valid age range, integer type, and proper data types
    if (
        typeof userAge !== 'number' || userAge < 0 || userAge > 100 || !Number.isInteger(userAge) ||
        typeof hasParentalControl !== 'boolean' ||
        typeof contentRating !== 'string'
    ) {
        return "Invalid Input";
    }

    // Convert rating to uppercase to handle case-insensitivity
    const rating = contentRating.toUpperCase();
    const validRatings = ["G", "PG", "R"];
    if (!validRatings.includes(rating)) return "Invalid Input";

    // --- STEP 2: DEFINE ACCESS RULES ---
    if (rating === "G") {
        return "Access Granted"; // General access
    }

    if (rating === "PG") {
        // Parental Guidance: Requires Pin for users under 13
        return userAge < 13 ? "Require Pin" : "Access Granted";
    }

    if (rating === "R") {
        // Adults (18+) get full access
        if (userAge >= 18) return "Access Granted";

        // Teens (15-17) can access with a Pin if Parental Control is enabled
        if (userAge >= 15 && userAge <= 17 && hasParentalControl === true) {
            return "Require Pin";
        }

        // Everyone else is restricted
        return "Access Denied";
    }
}

// --- EXAMPLE USAGE ---
console.log(getMovieAccess(16, true, "R"));
console.log(getMovieAccess(12, false, "PG"));
console.log(getMovieAccess(25, false, "R"));