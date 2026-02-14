/**
 * 🧩 PROBLEM–03: 🚑 Emergency Dispatcher

 * * Logic: Maps an incident to the correct service and determines priority urgency
 * based on the severity scale (1-5).
 */

function dispatchVehicle(incidentType, severity) {

    // --- STEP 1: INPUT VALIDATION ---
    // Severity must be a whole number (integer) between 1 and 5.
    if (!Number.isInteger(severity) || severity < 1 || severity > 5) {
        return "Invalid Input";
    }

    // --- STEP 2: VEHICLE MAPPING ---
    let vehicle = "";
    // Match the type exactly; if it's not in our list, it's an invalid input.
    switch (incidentType) {
        case "Medical": vehicle = "Ambulance"; break;
        case "Fire": vehicle = "Fire Truck"; break;
        case "Crime": vehicle = "Police Car"; break;
        default: return "Invalid Input";
    }

    // --- STEP 3: PRIORITY STATUS LOGIC ---
    // Severity 4 or 5 triggers high priority, others go to the standard queue.
    if (severity >= 4) {
        return `High Priority: Dispatch ${vehicle} immediately!`;
    } else {
        return `Standard Priority: Assign ${vehicle} to queue`;
    }
}

// --- EXAMPLE USAGE ---
console.log(dispatchVehicle("Fire", 5));
console.log(dispatchVehicle("Medical", 2));