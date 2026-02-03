/**
 * PROBLEM–02: 💊 Smart Medicine Reminder
 * Goal: Track the next dose timing using a 24-hour cycle and monitor course completion.
 */

function medicineTracker(lastTakenHour, gapHours, totalDosesLeft) {

    // --- STEP 1: INPUT VALIDATION ---
    /**
     * We validate three main conditions based on the requirements:
     * 1. lastTakenHour: Must be a number between 0 and 23.
     * 2. gapHours: Safety restriction requires this to be between 4 and 12.
     * 3. totalDosesLeft: Must be a non-negative number (0 or more).
     */
    if (
        typeof lastTakenHour !== 'number' || lastTakenHour < 0 || lastTakenHour > 23 ||
        typeof gapHours !== 'number' || gapHours < 4 || gapHours > 12 ||
        typeof totalDosesLeft !== 'number' || totalDosesLeft < 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE NEXT DOSE TIME ---
    /**
     * Logic: Add the gap to the last taken hour.
     * We use the Modulo Operator (%) 24 to ensure the time wraps around
     * if it exceeds midnight (e.g., 22 + 6 = 28; 28 % 24 = 4 AM).
     */
    const nextDoseAt = (lastTakenHour + gapHours) % 24;

    // --- STEP 3: DETERMINE STATUS MESSAGE ---
    /**
     * Requirement:
     * - If totalDosesLeft is exactly 0, the medical course is finished.
     * - Otherwise, inform the user about the next scheduled dose time.
     */
    let statusMessage;
    if (totalDosesLeft === 0) {
        statusMessage = "Course Completed";
    } else {
        statusMessage = `Next dose at ${nextDoseAt}`;
    }

    // --- STEP 4: RETURN FINAL DATA OBJECT ---
    return {
        nextDoseAt: nextDoseAt,
        status: statusMessage
    };
}

// --- EXAMPLE USAGE ---
console.log(medicineTracker(22, 6, 2));
console.log(medicineTracker(10, 8, 0));