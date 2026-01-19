function weatherTrendAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const averageTemp = {};
    const heatWaveCities = [];
    const risingTrendCities = [];
    const citySet = new Set();
    let hottestCity = "";
    let maxAvg = -Infinity;

    // Rule 3: Process each city
    for (let c of data) {

        // Rule 4: Validate object structure
        if (!c || typeof c.city !== "string" || !Array.isArray(c.temps) || c.temps.length === 0)
            return "Invalid Input";

        // Rule 5: Check duplicate city names
        if (citySet.has(c.city)) return "Invalid Input";
        citySet.add(c.city);

        // Rule 6: Validate temps & calculate sum, check heat wave
        let sum = 0;
        let heatWave = false;

        for (let t of c.temps) {
            if (typeof t !== "number") return "Invalid Input";
            sum += t;
            if (t > 35) heatWave = true;
        }

        // Rule 7: Average temperature
        const avg = sum / c.temps.length;
        averageTemp[c.city] = Math.round(avg * 10) / 10;

        // Rule 8: Track hottest city
        if (avg > maxAvg) {
            maxAvg = avg;
            hottestCity = c.city;
        }

        // Rule 9: Heat wave and rising trend checks
        if (heatWave) heatWaveCities.push(c.city);
        if (c.temps[c.temps.length - 1] > c.temps[0]) risingTrendCities.push(c.city);
    }

    // Rule 10: Return result
    return { averageTemp, hottestCity, heatWaveCities, risingTrendCities };
}

// Example Usage
const weatherResult = weatherTrendAnalyzer([
    { city: "Dhaka", temps: [28, 30, 32, 33, 35] },
    { city: "Rangpur", temps: [20, 22, 21, 23, 22] },
    { city: "Cox's Bazar", temps: [34, 36, 37, 38, 40] },
]);

console.log(weatherResult);