/**
 * 🧹 PROBLEM–03: matchVolunteer()

 * Logic: Matches volunteers based on age requirements and zone availability.
 */

function matchVolunteer(volunteerAge, preferredZone) {

    // --- STEP 1: VALIDATION ---
    // Ensure age is a positive number and zone is either Urban or Rural.
    const validZones = ["Urban", "Rural"];
    if (typeof volunteerAge !== 'number' || volunteerAge <= 0 || !validZones.includes(preferredZone)) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK AGE ELIGIBILITY ---
    if (volunteerAge < 18) {
        return "Underage";
    }

    // --- STEP 3: ZONE ASSIGNMENT ---
    // Only adults reach this part of the code.
    if (preferredZone === "Urban") {
        return "Assigned";
    } else {
        return "Waitlist"; // For "Rural"
    }
}

// --- EXAMPLE USAGE ---
console.log(matchVolunteer(20, "Urban"));
console.log(matchVolunteer(16, "Rural"));
console.log(matchVolunteer(25, "Sundarban"));