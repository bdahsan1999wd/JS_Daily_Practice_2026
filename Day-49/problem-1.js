/**
 * 🚜 PROBLEM–01: getCropStatus()

 * Logic: Prioritizes moisture levels first, then evaluates nitrogen for fertilizer needs.
 */

function getCropStatus(nitrogen, moisture) {

    // --- STEP 1: VALIDATION ---
    // Ensure both inputs are numbers and fall within the valid 0-100 range.
    if (
        typeof nitrogen !== 'number' || nitrogen < 0 || nitrogen > 100 ||
        typeof moisture !== 'number' || moisture < 0 || moisture > 100
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: PRIORITY LOGIC ---
    // Rule 1: Irrigation is the top priority if water is low.
    if (moisture < 30) {
        return "Irrigate";
    }
    // Rule 2: If moisture is okay, check if the soil needs nutrients.
    else if (nitrogen < 40) {
        return "Add Fertilizer";
    }
    // Rule 3: Both conditions are optimal.
    else {
        return "Healthy";
    }
}

// --- EXAMPLE USAGE ---
console.log(getCropStatus(50, 20));
console.log(getCropStatus(20, 45));
console.log(getCropStatus(110, 50));