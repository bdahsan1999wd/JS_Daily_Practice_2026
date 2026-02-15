/**
 * 🧩 PROBLEM–02: 🌐 Public Wi-Fi Access

 * Logic: Checks if a user gets High Speed, Throttled, or Blocked Wi-Fi.
 * - Residents get more data (50GB) before slowing down.
 * - Non-Residents get very little data (10GB) before being cut off.
 */

function getWifiAccess(isResident, dataUsedGB) {

    // --- STEP 1: VALIDATION ---
    // isResident must be true/false. dataUsedGB must be a positive number.
    if (
        typeof isResident !== "boolean" ||
        typeof dataUsedGB !== "number" ||
        Number.isNaN(dataUsedGB) ||
        dataUsedGB < 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: RESIDENT LOGIC ---
    if (isResident === true) {
        // Residents can use up to 50GB at high speed.
        return dataUsedGB <= 50 ? "High Speed" : "Throttled";
    }

    // --- STEP 3: NON-RESIDENT LOGIC ---
    else {
        // Non-residents only get 10GB, then they are blocked.
        return dataUsedGB <= 10 ? "High Speed" : "Blocked";
    }
}

// --- Example Usage ---
console.log(getWifiAccess(true, 45));
console.log(getWifiAccess(true, 60));
console.log(getWifiAccess(false, 5));
console.log(getWifiAccess(false, 15));
console.log(getWifiAccess("yes", 10));