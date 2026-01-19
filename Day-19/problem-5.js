function busRouteLoadAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const averagePassengers = {};
    const overcrowdedRoutes = [];
    const decliningRoutes = [];
    const routeSet = new Set();
    let busiestRoute = "";
    let maxAvg = -Infinity;

    // Rule 3: Process each route
    for (let r of data) {

        // Rule 4: Validate object structure
        if (!r || typeof r.route !== "string" || !Array.isArray(r.passengers) || r.passengers.length === 0)
            return "Invalid Input";

        // Rule 5: Check duplicate route names
        if (routeSet.has(r.route)) return "Invalid Input";
        routeSet.add(r.route);

        // Rule 6: Validate passengers, calculate sum, check overcrowded
        let sum = 0;
        let overcrowded = false;

        for (let p of r.passengers) {
            if (typeof p !== "number") return "Invalid Input";
            sum += p;
            if (p > 400) overcrowded = true;
        }

        // Rule 7: Average passengers
        const avg = sum / r.passengers.length;
        averagePassengers[r.route] = Math.round(avg * 10) / 10;

        // Rule 8: Track busiest route
        if (avg > maxAvg) {
            maxAvg = avg;
            busiestRoute = r.route;
        }

        // Rule 9: Overcrowded & declining route checks
        if (overcrowded) overcrowdedRoutes.push(r.route);
        if (r.passengers[r.passengers.length - 1] < r.passengers[0]) decliningRoutes.push(r.route);
    }

    // Rule 10: Return result
    return { averagePassengers, busiestRoute, overcrowdedRoutes, decliningRoutes };
}

// Example Usage
const busResult = busRouteLoadAnalyzer([
    { route: "Route 1", passengers: [120, 150, 180, 200, 230] },
    { route: "Route 2", passengers: [300, 280, 260, 250, 240] },
    { route: "Route 3", passengers: [50, 60, 55, 65, 70] },
]);

console.log(busResult);