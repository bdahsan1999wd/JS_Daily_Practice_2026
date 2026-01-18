function trafficFlowAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalTraffic = {};
    const roadSet = new Set();
    const overloadedRoads = [];
    const stableRoads = [];
    let busiestRoad = "";
    let maxTotal = -1;

    // Rule 3: Process each road
    for (let r of data) {

        // Rule 4: Validate structure
        if (!r || typeof r.road !== "string" || !Array.isArray(r.traffic) || r.traffic.length === 0)
            return "Invalid Input";

        // Rule 5: Check duplicate road
        if (roadSet.has(r.road)) return "Invalid Input";
        roadSet.add(r.road);

        // Rule 6: Validate traffic & calculate
        let sum = 0;
        let min = Infinity;
        let max = -Infinity;
        let overloaded = false;

        for (let v of r.traffic) {
            if (typeof v !== "number" || v < 0) return "Invalid Input";
            sum += v;
            if (v < min) min = v;
            if (v > max) max = v;
            if (v > 250) overloaded = true;
        }

        totalTraffic[r.road] = sum;

        // Rule 7: Track busiest road
        if (sum > maxTotal) {
            maxTotal = sum;
            busiestRoad = r.road;
        }

        // Rule 8: Stable & overloaded check
        if (overloaded) overloadedRoads.push(r.road);
        if (max - min < 100) stableRoads.push(r.road);
    }

    // Rule 9: Return result
    return { totalTraffic, busiestRoad, overloadedRoads, stableRoads };
}


// Example Usage
console.log(trafficFlowAnalyzer([
    { road: "Road A", traffic: [120, 200, 180, 220, 300] },
    { road: "Road B", traffic: [80, 70, 90, 100, 110] },
]));
