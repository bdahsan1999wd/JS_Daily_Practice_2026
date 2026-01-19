function internetSpeedAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const averageSpeed = {};
    const poorServiceAreas = [];
    const stableAreas = [];
    const areaSet = new Set();
    let fastestArea = "";
    let maxAvg = -Infinity;

    // Rule 3: Process each area
    for (let a of data) {

        // Rule 4: Validate object structure
        if (!a || typeof a.area !== "string" || !Array.isArray(a.speeds) || a.speeds.length === 0)
            return "Invalid Input";

        // Rule 5: Check duplicate area names
        if (areaSet.has(a.area)) return "Invalid Input";
        areaSet.add(a.area);

        // Rule 6: Validate speeds, calculate sum, min, max, poor service
        let sum = 0;
        let min = Infinity;
        let max = -Infinity;
        let poorService = false;

        for (let s of a.speeds) {
            if (typeof s !== "number") return "Invalid Input";
            sum += s;
            if (s < 10) poorService = true;
            if (s < min) min = s;
            if (s > max) max = s;
        }

        // Rule 7: Average speed
        const avg = sum / a.speeds.length;
        averageSpeed[a.area] = Math.round(avg * 10) / 10;

        // Rule 8: Track fastest area
        if (avg > maxAvg) {
            maxAvg = avg;
            fastestArea = a.area;
        }

        // Rule 9: Poor service & stable area checks
        if (poorService) poorServiceAreas.push(a.area);
        if (max - min < 5) stableAreas.push(a.area);
    }

    // Rule 10: Return result
    return { averageSpeed, fastestArea, poorServiceAreas, stableAreas };
}

// Example Usage
const internetResult = internetSpeedAnalyzer([
    { area: "Mirpur", speeds: [20, 22, 18, 25, 30] },
    { area: "Dhanmondi", speeds: [50, 48, 47, 49, 50] },
    { area: "Gulshan", speeds: [8, 12, 10, 9, 11] },
]);

console.log(internetResult);