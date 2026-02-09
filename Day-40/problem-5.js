/**
 * PROBLEM–05: 🛂 Digital Passport Verification

 * Logic: Simulates an immigration database check to determine if a
 * passport is ready for pickup based on verification, payment, and processing time.
 */

function verifyPassportStatus(isPoliceVerified, hasPaidFee, daysSinceApplied) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure daysSinceApplied is a non-negative number
    // Ensure the boolean flags are of the correct type
    if (
        typeof daysSinceApplied !== 'number' || daysSinceApplied < 0 ||
        typeof isPoliceVerified !== 'boolean' ||
        typeof hasPaidFee !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: DEFINE STATUS VARIABLES ---
    let statusText = "";
    let collectionPossible = false;

    // --- STEP 3: STATUS DETERMINATION LOGIC ---

    // Condition A: All requirements met (Verified + Paid + 15+ days passed)
    if (isPoliceVerified === true && hasPaidFee === true && daysSinceApplied >= 15) {
        statusText = "Ready for Collection";
        collectionPossible = true;
    }
    // Condition B: Paperwork is done, but the 15-day printing window hasn't passed
    else if (isPoliceVerified === true && hasPaidFee === true && daysSinceApplied < 15) {
        statusText = "In Printing";
        collectionPossible = false;
    }
    // Condition C: Either police verification or payment is still missing
    else {
        statusText = "Pending Verification";
        collectionPossible = false;
    }

    // --- STEP 4: RETURN SUMMARY OBJECT ---
    // Returning an object allows the system to receive multiple pieces of data at once
    return {
        status: statusText,
        canCollect: collectionPossible
    };
}

// --- EXAMPLE USAGE ---
console.log(verifyPassportStatus(true, true, 20));
console.log(verifyPassportStatus(true, true, 5));
console.log(verifyPassportStatus(false, true, 30));
console.log(verifyPassportStatus(true, true, -1));