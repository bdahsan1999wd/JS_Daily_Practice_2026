/**
 * 🅿️ PROBLEM–01: checkParking()

 * Separates validation from business logic.
 */

function checkParking(parkingSlots) {

    // --- STEP 1: INITIAL ARRAY VALIDATION ---
    // Ensure the input is an array and it's not empty.
    if (!Array.isArray(parkingSlots) || parkingSlots.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DATA INTEGRITY CHECK (GUARD CLAUSE) ---
    // validate the entire array first. If even ONE element is not a boolean, we fail immediately. This keeps our logic loop clean.
    const allAreBooleans = parkingSlots.every(slot => typeof slot === "boolean");

    if (!allAreBooleans) {
        return "Invalid Input";
    }

    // --- STEP 3: CORE BUSINESS LOGIC ---
    // Now that we KNOW the data is safe, we just look for the first 'false' (empty spot).
    for (let i = 0; i < parkingSlots.length; i++) {
        if (parkingSlots[i] === false) {
            return i; // Found an empty spot, return index immediately.
        }
    }

    // --- STEP 4: FINAL FALLBACK ---
    // If the loop completes without returning an index, the garage is full.
    return "Full";
}

// --- EXAMPLE USAGE ---
console.log(checkParking([true, true, false, true]));
console.log(checkParking([true, true, true]));
console.log(checkParking([true, "broken_sensor", false]));
console.log(checkParking([]));