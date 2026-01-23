function dnaMutationEngine(dna, operations) {

    // --- Input validation ---
    // 'dna' must be a string, 'operations' must be an array
    if (typeof dna !== "string" || !Array.isArray(operations)) return "Invalid Input";

    let seq = dna.split(""); // convert DNA string to array for easy manipulation
    let applied = 0;         // number of successful operations
    let skipped = 0;         // number of invalid/skipped operations

    for (const op of operations) {
        // Each operation must have a type and an index number
        if (!op.type || typeof op.index !== "number") {
            skipped++;
            continue;
        }

        // --- Insert operation ---
        if (op.type === "insert") {
            // Valid DNA character and valid index (0 to length)
            if (["A", "C", "G", "T"].includes(op.value) && op.index >= 0 && op.index <= seq.length) {
                seq.splice(op.index, 0, op.value); // insert value at index
                applied++;
            } else skipped++; // invalid value or index
        }
        // --- Delete operation ---
        else if (op.type === "delete") {
            // Index must be within current sequence
            if (op.index >= 0 && op.index < seq.length) {
                seq.splice(op.index, 1); // remove element at index
                applied++;
            } else skipped++;
        }
        // --- Replace operation ---
        else if (op.type === "replace") {
            // Valid DNA character and index within sequence
            if (["A", "C", "G", "T"].includes(op.value) && op.index >= 0 && op.index < seq.length) {
                seq[op.index] = op.value; // replace value at index
                applied++;
            } else skipped++;
        }
        // --- Unknown operation type ---
        else skipped++;
    }

    // --- Return final DNA sequence and counts ---
    return {
        finalDNA: seq.join(""), // convert array back to string
        applied,                // number of applied operations
        skipped                 // number of skipped operations
    };
}

// --- Example ---
console.log(dnaMutationEngine("AACCGG", [
    { type: "insert", index: 2, value: "T" },  // insert 'T' at index 2 -> "AA T CCGG"
    { type: "delete", index: 4 },              // delete index 4 -> "AATCGG" -> delete 'C' -> "AATGG"
    { type: "replace", index: 1, value: "G" } // replace index 1 with 'G' -> "AGTGG"
]));