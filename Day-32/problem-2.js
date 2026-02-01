/**
 * PROBLEM–02: 📶 Smart Internet Usage Controller
 * Goal: Decide if speed should be limited and calculate data left after usage.
 */

function internetController(dataLeft, activeDevices, priorityUser) {

    // --- STEP 1: VALIDATION ---
    // We verify dataLeft and activeDevices are numbers and not negative.
    // We also ensure priorityUser is a boolean (true or false).
    if (typeof dataLeft !== 'number' || dataLeft < 0 ||
        typeof activeDevices !== 'number' || activeDevices < 0 ||
        typeof priorityUser !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE SPEED STATUS ---
    // Rule: If current data is less than 5GB, it is "Limited", else it is "Standard".
    // We use a ternary operator for a quick decision.
    let speedStatus = (dataLeft < 5) ? "Limited" : "Standard";

    // --- STEP 3: CALCULATE TOTAL DATA CONSUMPTION ---
    // Rule: Each active device takes 1GB.
    // Rule: If priorityUser is true, reserve an extra 2GB.
    let deviceUsage = activeDevices * 1;
    let priorityReservation = priorityUser ? 2 : 0;
    let totalNeeded = deviceUsage + priorityReservation;

    // --- STEP 4: CALCULATE USABLE DATA LEFT ---
    // Subtract usage from the total data available.
    // We use Math.max(0, ...) so that even if usage > data, we return 0 (not a negative number).
    let usableDataResult = Math.max(0, dataLeft - totalNeeded);

    // --- STEP 5: RETURN DATA ---
    return {
        speed: speedStatus,
        usableData: usableDataResult
    };
}

// --- EXAMPLE USAGE ---
console.log(internetController(6, 3, true));
console.log(internetController(20, 5, false));
