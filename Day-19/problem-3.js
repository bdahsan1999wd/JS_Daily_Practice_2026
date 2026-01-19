function riverLevelAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const averageLevel = {};
    const floodRiskRivers = [];
    const risingRivers = [];
    const riverSet = new Set();
    let mostDangerousRiver = "";
    let maxAvg = -Infinity;

    // Rule 3: Process each river
    for (let r of data) {

        // Rule 4: Validate object structure
        if (!r || typeof r.river !== "string" || !Array.isArray(r.levels) || r.levels.length === 0)
            return "Invalid Input";

        // Rule 5: Check duplicate river names
        if (riverSet.has(r.river)) return "Invalid Input";
        riverSet.add(r.river);

        // Rule 6: Validate levels, calculate sum, check flood risk
        let sum = 0;
        let floodRisk = false;

        for (let l of r.levels) {
            if (typeof l !== "number") return "Invalid Input";
            sum += l;
            if (l > 550) floodRisk = true;
        }

        // Rule 7: Average level
        const avg = sum / r.levels.length;
        averageLevel[r.river] = Math.round(avg * 10) / 10;

        // Rule 8: Track most dangerous river
        if (avg > maxAvg) {
            maxAvg = avg;
            mostDangerousRiver = r.river;
        }

        // Rule 9: Flood risk & rising river checks
        if (floodRisk) floodRiskRivers.push(r.river);
        if (r.levels[r.levels.length - 1] > r.levels[0]) risingRivers.push(r.river);
    }

    // Rule 10: Return result
    return { averageLevel, mostDangerousRiver, floodRiskRivers, risingRivers };
}

// Example Usage
const riverResult = riverLevelAnalyzer([
    { river: "Padma", levels: [450, 480, 500, 530, 560] },
    { river: "Jamuna", levels: [300, 310, 320, 330, 340] },
    { river: "Meghna", levels: [550, 560, 570, 580, 590] },
]);

console.log(riverResult);