/**
 * 🧩 PROBLEM–04: 🚦 Traffic Signal Timer

 * * Logic: Dynamically adjusts the green light duration based on the number of cars
 * detected at an intersection to optimize traffic flow.
 */

function adjustTrafficTimer(carCount) {

    // --- STEP 1: INPUT VALIDATION ---
    // carCount must be a non-negative integer (cannot have half a car or negative cars).
    if (!Number.isInteger(carCount) || carCount < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DURATION SELECTION ---
    if (carCount < 10) {
        return 30; // Low traffic: 30 seconds
    } else if (carCount <= 40) {
        return 60; // Moderate traffic: 60 seconds
    } else {
        return 90; // Heavy traffic: 90 seconds
    }
}

// --- EXAMPLE USAGE ---
console.log(adjustTrafficTimer(25));
console.log(adjustTrafficTimer(50));
console.log(adjustTrafficTimer(-1));