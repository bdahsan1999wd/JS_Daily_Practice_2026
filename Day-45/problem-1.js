/**
 * 🧩 PROBLEM–01: 💡 Smart Streetlight Controller

 * * Logic: Automates street lighting by first checking if natural light is sufficient.
 * If it's dark, it uses motion sensors to decide between full power or energy-saving mode.
 */

function manageStreetlights(sunlightLevel, motionDetected) {

    // --- STEP 1: STRICT INPUT VALIDATION ---
    // sunlightLevel must be a finite number (not NaN or Infinity) between 0 and 100.
    // motionDetected must be a strict boolean.
    if (
        !Number.isFinite(sunlightLevel) ||
        sunlightLevel < 0 ||
        sunlightLevel > 100 ||
        typeof motionDetected !== "boolean"
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: DAYLIGHT CHECK ---
    // If the sunlight level is above 50, the light remains OFF regardless of motion.
    if (sunlightLevel > 50) {
        return "OFF";
    }

    // --- STEP 3: DYNAMIC LIGHTING LOGIC ---
    // If it is dark (<= 50), we check the motion sensor.
    // Movement detected (true) -> "FULL BRIGHTNESS"
    // No movement (false) -> "DIM MODE" (to save energy)
    return motionDetected ? "FULL BRIGHTNESS" : "DIM MODE";
}

// --- EXAMPLE USAGE ---
console.log(manageStreetlights(30, true));
console.log(manageStreetlights(80, false));
console.log(manageStreetlights(120, true));
console.log(manageStreetlights(NaN, true));