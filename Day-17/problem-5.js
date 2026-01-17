function waterConsumptionMonitor(buildings) {

    // Rule 1: Validate input
    if (!Array.isArray(buildings) || buildings.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalUsage = {};         // Total water usage per building
    const buildingSet = new Set(); // To check duplicate building names
    const lowUsageBuildings = [];  // Buildings with avg daily usage < 400L
    let highestConsumer = "";      // Building with highest usage
    let maxUsage = -1;

    // Rule 3: Process each building
    for (let b of buildings) {
        // Rule 4: Validate building object
        if (!b || typeof b.building !== "string" || !Array.isArray(b.dailyUsage)) return "Invalid Input";

        // Rule 5: Check duplicate buildings
        if (buildingSet.has(b.building)) return "Invalid Input";
        buildingSet.add(b.building);

        // Rule 6: Validate usage array and calculate total
        let sum = 0;
        for (let u of b.dailyUsage) {
            if (typeof u !== "number" || u < 0) return "Invalid Input";
            sum += u;
        }
        totalUsage[b.building] = sum;

        // Rule 7: Track low usage buildings
        const avg = b.dailyUsage.length ? sum / b.dailyUsage.length : 0;
        if (avg < 400) lowUsageBuildings.push(b.building);

        // Rule 8: Track highest consumer
        if (sum > maxUsage) {
            maxUsage = sum;
            highestConsumer = b.building;
        }
    }

    // Rule 9: Return result
    return { totalUsage, highestConsumer, lowUsageBuildings };
}


// Example Usage
console.log(waterConsumptionMonitor([
    { building: "Building A", dailyUsage: [500, 600, 550] },
    { building: "Building B", dailyUsage: [300, 320, 310] },
]));