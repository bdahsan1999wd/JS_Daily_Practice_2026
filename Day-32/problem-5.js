/**
 * Goal: Calculate real focus time by subtracting penalties for distractions.
 */

function focusTracker(minutesFocused, distractions, deepMode) {

    // --- STEP 1: VALIDATION ---
    // We check if minutes and distractions are non-negative numbers.
    // We also ensure that 'deepMode' is a boolean.
    if (typeof minutesFocused !== 'number' || minutesFocused < 0 ||
        typeof distractions !== 'number' || distractions < 0 ||
        typeof deepMode !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY DEEP MODE DISCOUNT ---
    // Rule: Deep Mode is special; it allows the user to ignore the first 2 distractions.
    // Math.max(0, ...) prevents the distraction count from becoming negative.
    let effectiveDistractionCount = deepMode ? Math.max(0, distractions - 2) : distractions;

    // --- STEP 3: CALCULATE TIME PENALTY ---
    // Rule: Every distraction that "counts" reduces the focus time by 5 minutes.
    let timeLost = effectiveDistractionCount * 5;

    // --- STEP 4: CALCULATE FINAL FOCUS TIME ---
    // Subtract the penalty from the original minutes. Math.max ensures we don't go below 0.
    let finalFocusTime = Math.max(0, minutesFocused - timeLost);

    // --- STEP 5: DETERMINE PRODUCTIVITY STATUS ---
    // Rule: If the final focus time is 45 minutes or more, the status is "Good".
    let productivityStatus = (finalFocusTime >= 45) ? "Good" : "Needs Improvement";

    // --- STEP 6: RETURN DATA ---
    return {
        effectiveFocus: finalFocusTime,
        status: productivityStatus
    };
}

// --- EXAMPLE USAGE ---
console.log(focusTracker(60, 4, true));
console.log(focusTracker(40, 1, false));