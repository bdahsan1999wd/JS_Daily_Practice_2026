// 🧩 PROBLEM–04: 🚦 Dhaka Traffic AI Signal

// Logic: A dynamic traffic light timer that converts vehicle "weight" into time, prioritizing life-saving transit.

function getSignalTiming(carCount, busCount, isAmbulancePresent) {

    // --- STEP 1: INPUT VALIDATION ---
    // Vehicle counts must be non-negative integers
    if (typeof carCount !== 'number' || carCount < 0 || !Number.isInteger(carCount) ||
        typeof busCount !== 'number' || busCount < 0 || !Number.isInteger(busCount) ||
        typeof isAmbulancePresent !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: EMERGENCY INTERRUPT ---
    // If an ambulance is detected, force the signal to green (0 seconds wait time)
    if (isAmbulancePresent) return 0;

    // --- STEP 3: CALCULATE DURATION ---
    let duration = 30; // Initialize with a baseline green signal of 30s
    duration += (carCount * 2); // Each car adds 2 seconds of traffic volume
    duration += (busCount * 5); // Each bus carries more people, so adds 5 seconds

    // --- STEP 4: APPLY MAXIMUM SAFETY CAP ---
    // To prevent starving other lanes, never exceed a 120-second signal
    return duration > 120 ? 120 : duration;
}

// --- EXAMPLE USAGE ---
console.log(getSignalTiming(10, 5, false));
console.log(getSignalTiming(50, 20, false));
console.log(getSignalTiming(10, 10, true));