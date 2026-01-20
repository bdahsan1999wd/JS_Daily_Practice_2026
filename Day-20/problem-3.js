function smartHomeEnergyAnalyzer(homes) {

    // Step 1: Input must be a non-empty array
    if (!Array.isArray(homes) || homes.length === 0) return "Invalid Input";

    const averageUsage = {};          // Store average per home
    const overconsumingHomes = [];    // Homes having any day usage > 20
    const stableHomes = [];           // Homes where (max - min) < 5
    const names = new Set();          // For duplicate check

    let highestConsumingHome = "";
    let maxAverage = -Infinity;

    // Step 2: Loop through each home object
    for (let h of homes) {

        // Step 3: Validate home object structure
        if (!h || typeof h.home !== "string" || !Array.isArray(h.usage) || h.usage.length === 0) {
            return "Invalid Input";
        }

        // Step 4: Check duplicate home names
        if (names.has(h.home)) return "Invalid Input";
        names.add(h.home);

        let sum = 0;
        let isOverconsuming = false;

        let max = -Infinity;
        let min = Infinity;

        // Step 5: Process daily usage
        for (let i = 0; i < h.usage.length; i++) {

            // Validate each usage value
            if (typeof h.usage[i] !== "number" || h.usage[i] < 0) return "Invalid Input";

            const val = h.usage[i];
            sum += val;

            // Check overconsuming rule
            if (val > 20) isOverconsuming = true;

            // Track max & min for stability
            if (val > max) max = val;
            if (val < min) min = val;
        }

        // Step 6: Calculate average
        let avg = sum / h.usage.length;
        averageUsage[h.home] = Number(avg.toFixed(2));

        // Step 7: Track highest consuming home
        if (avg > maxAverage) {
            maxAverage = avg;
            highestConsumingHome = h.home;
        }

        // Step 8: Push overconsuming homes
        if (isOverconsuming) overconsumingHomes.push(h.home);

        // Step 9: Check stable homes
        if (max - min < 5) {
            stableHomes.push(h.home);
        }
    }

    // Step 10: Return final result
    return {
        averageUsage,
        highestConsumingHome,
        overconsumingHomes,
        stableHomes
    };
}

// Example Usage
const smartHomeResult = smartHomeEnergyAnalyzer([
    { home: "Home A", usage: [12, 15, 14, 16, 18] },
    { home: "Home B", usage: [20, 18, 22, 21, 19] },
    { home: "Home C", usage: [8, 10, 9, 11, 12] },
]);

console.log(smartHomeResult);