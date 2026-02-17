/**
 * 📢 PROBLEM–05: checkNewsUrgency()

 * Logic: Filters reports based on volume and source reliability.
 */

function checkNewsUrgency(reportCount, sourceVerified) {

    // --- STEP 1: VALIDATION ---
    if (typeof reportCount !== 'number' || reportCount < 0 || typeof sourceVerified !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: PRIORITY LOGIC ---
    // If report volume is high and the source is unknown/unverified
    if (reportCount > 50 && sourceVerified === false) {
        return "Immediate Action";
    }
    // If reports are moderate (10-50), we review regardless of the source
    else if (reportCount >= 10 && reportCount <= 50) {
        return "Review";
    }
    // If report count is very low, we ignore for now
    else {
        return "Ignore";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkNewsUrgency(60, false));
console.log(checkNewsUrgency(5, true));
console.log(checkNewsUrgency(-10, false));
console.log(checkNewsUrgency(45, true));