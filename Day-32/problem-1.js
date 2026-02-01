/**
 * PROBLEM–01: 🕒 Smart Queue Token System
 * Goal: Find out how many people get service based on the number of open counters.
 */

function queueManager(waitingPeople, countersOpen, emergency) {

    // --- STEP 1: VALIDATION ---
    // We check if the types are correct (numbers for people/counters, boolean for emergency).
    // We also ensure numbers are non-negative.
    // If any check fails, we immediately stop and return "Invalid Input".
    if (typeof waitingPeople !== 'number' || waitingPeople < 0 ||
        typeof countersOpen !== 'number' || countersOpen < 0 ||
        typeof emergency !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTAL CAPACITY ---
    // Rule: Each open counter can handle exactly 5 people.
    // So, total capacity = number of counters multiplied by 5.
    const totalCapacity = countersOpen * 5;

    // --- STEP 3: CALCULATE PEOPLE SERVED ---
    // We use Math.min() because if we have capacity for 20 people but only 3 are waiting,
    // we only serve 3. If 50 are waiting but capacity is 20, we only serve 20.
    const servedCount = Math.min(waitingPeople, totalCapacity);

    // --- STEP 4: CALCULATE PEOPLE REMAINING ---
    // Subtract the served count from the total people who were waiting.
    const remainingCount = waitingPeople - servedCount;

    // --- STEP 5: RETURN DATA ---
    // Return the final results in a structured Object.
    return {
        served: servedCount,
        remaining: remainingCount,
        emergencyToken: emergency
    };
}

// --- EXAMPLE USAGE ---
console.log(queueManager(18, 2, false));
console.log(queueManager(3, 1, true));