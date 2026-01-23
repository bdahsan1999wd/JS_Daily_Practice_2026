function atmCashDispenser(balance, notes, withdraws) {

    // --- Input validation ---
    // balance should be a number, notes an object, withdraws an array
    if (typeof balance !== "number" || typeof notes !== "object" || !Array.isArray(withdraws)) return "Invalid Input";

    let success = [];       // stores successful withdrawals
    let failed = [];        // stores failed withdrawals
    const remainingNotes = { ...notes }; // copy of notes to track remaining notes

    for (const w of withdraws) {
        let remaining = w;  // amount left to dispense
        const usedNotes = {}; // notes used for this withdrawal

        // Get note denominations in descending order (greedy strategy)
        const noteValues = Object.keys(remainingNotes).map(Number).sort((a, b) => b - a);

        // --- Try to dispense using available notes ---
        for (const note of noteValues) {
            // Number of notes to use = min(needed for remaining / note, available notes)
            const count = Math.min(Math.floor(remaining / note), remainingNotes[note]);
            remaining -= count * note; // reduce remaining amount
            usedNotes[note] = count;   // record notes used
        }

        // --- Check if withdrawal is possible ---
        if (remaining === 0 && w <= balance) { // exact amount possible & within balance
            success.push(w);        // record as successful
            balance -= w;           // deduct from ATM balance
            for (const note in usedNotes) remainingNotes[note] -= usedNotes[note]; // reduce notes
        } else {
            failed.push(w);         // cannot dispense exact amount or exceeds balance
        }
    }

    // --- Return final state ---
    return { success, failed, remainingNotes };
}

// --- Example ---
console.log(atmCashDispenser(
    10000,
    { 1000: 5, 500: 4, 100: 10 },
    [2300, 3700, 1500]
));