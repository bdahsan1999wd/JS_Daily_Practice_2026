/**
 * 🧩 PROBLEM–04: 🛡️ Double-Voting Detector

 * Logic: Prevents "Identity Fraud" by checking historical voting records.
 */

function detectFraud(voterId, votedList) {
    
    // --- STEP 1: STRICT VALIDATION ---
    // ID must be a valid string and not just empty spaces.
    // votedList must be an Array object containing existing records.
    if (typeof voterId !== 'string' || voterId.trim() === "" || !Array.isArray(votedList)) {
        return "Invalid Input";
    }

    // --- STEP 2: LOOKUP LOGIC ---
    // .includes() scans the entire array to see if the current voterId matches any previous entry.
    // This is a direct check for double-voting attempts.
    if (votedList.includes(voterId)) {
        return true; // Fraud detected: User already voted!
    }

    // --- STEP 3: CLEAN RECORD ---
    return false; // No duplicate found; the user is clear to vote.
}

// --- EXAMPLE USAGE ---
console.log(detectFraud("V101", ["V102", "V105", "V101"]));
console.log(detectFraud("V-100", ["V-01", "V-99"]));
console.log(detectFraud("", ["V-101"]));