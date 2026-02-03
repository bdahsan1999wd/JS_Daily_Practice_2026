/**
 * PROBLEM–04: 😴 Smart Sleep Cycle Optimizer
 * Objective: Calculate the ideal bedtime based on a 24-hour clock.
 */

function sleepOptimizer(wakeUpTime, sleepType) {

    // --- STEP 1: INPUT VALIDATION ---
    /**
     * We must check two things:
     * 1. wakeUpTime: Must be a number between 0 and 23.
     * 2. sleepType: Must be exactly "Deep" or "Quick".
     */
    if (typeof wakeUpTime !== 'number' || wakeUpTime < 0 || wakeUpTime > 23) {
        return "Invalid Input";
    }

    if (sleepType !== "Deep" && sleepType !== "Quick") {
        return "Invalid Input";
    }

    // --- STEP 2: DEFINE SLEEP DURATION ---
    /**
     * According to the rules:
     * - "Deep" sleep needs a 9-hour window.
     * - "Quick" sleep needs a 6-hour window.
     */
    let hoursToSubtract = 0;
    if (sleepType === "Deep") {
        hoursToSubtract = 9;
    } else {
        hoursToSubtract = 6;
    }

    // --- STEP 3: CALCULATE BEDTIME ---
    /**
     * To find bedtime, we go backwards from the wake-up time.
     * Example: If you wake up at 5 AM and need 6 hours of sleep:
     * 5 - 6 = -1.
     */
    let bedTime = wakeUpTime - hoursToSubtract;

    // --- STEP 4: HANDLE THE 24-HOUR WRAP-AROUND ---
    /**
     * On a 24-hour clock, there are no negative numbers.
     * If our result is negative (like -1), it means the bedtime is on the previous day.
     * Adding 24 "wraps" the clock around.
     * Example: -1 + 24 = 23 (which is 11:00 PM).
     */
    if (bedTime < 0) {
        bedTime = bedTime + 24;
    }

    // --- STEP 5: PREPARE THE MESSAGE & RETURN ---
    /**
     * The output must be an object containing the numeric bedTime
     * and a specific string message.
     */
    let displayMessage = "Go to sleep at " + bedTime + ":00";

    return {
        bedTime: bedTime,
        message: displayMessage
    };
}

// --- EXAMPLE USAGE ---
console.log(sleepOptimizer(7, "Deep"));
console.log(sleepOptimizer(5, "Quick"));