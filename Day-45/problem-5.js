/**
 * 🧩 PROBLEM–05: 🗑️ Waste Collection Scheduler
 * * Logic: A lookup system that matches city zones and waste categories to specific collection days.
 */

function getCollectionDay(zone, wasteType) {

    // --- STEP 1: INPUT VALIDATION ---
    // We only have 3 zones and 2 specific waste categories.
    const validZones = [1, 2, 3];
    const validTypes = ["General", "Recycle"];

    if (!validZones.includes(zone) || !validTypes.includes(wasteType)) {
        return "Invalid Input";
    }

    // --- STEP 2: DATA LOOKUP LOGIC ---
    // Logic is branched by zone, then specific day is determined by the type.
    if (zone === 1) {
        return wasteType === "General" ? "Monday" : "Wednesday";
    } else if (zone === 2) {
        return wasteType === "General" ? "Tuesday" : "Thursday";
    } else {
        // This block covers Zone 3
        return wasteType === "General" ? "Wednesday" : "Friday";
    }
}

// --- EXAMPLE USAGE ---
console.log(getCollectionDay(2, "Recycle"));
console.log(getCollectionDay(1, "General"));
console.log(getCollectionDay(3, "General"));
console.log(getCollectionDay(4, "General"));