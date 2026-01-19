function elevatorUsageAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalTrips = {};
    const overloadedElevators = [];
    const decliningUsageElevators = [];
    const elevatorSet = new Set();
    let mostUsedElevator = "";
    let maxTotal = -Infinity;

    // Rule 3: Process each elevator
    for (let e of data) {

        // Rule 4: Validate object structure
        if (!e || typeof e.elevator !== "string" || !Array.isArray(e.trips) || e.trips.length === 0)
            return "Invalid Input";

        // Rule 5: Check duplicate elevator names
        if (elevatorSet.has(e.elevator)) return "Invalid Input";
        elevatorSet.add(e.elevator);

        // Rule 6: Validate trips, calculate sum
        let sum = 0;
        for (let t of e.trips) {
            if (typeof t !== "number") return "Invalid Input";
            sum += t;
        }

        totalTrips[e.elevator] = sum;

        // Rule 7: Track most used elevator
        if (sum > maxTotal) {
            maxTotal = sum;
            mostUsedElevator = e.elevator;
        }

        // Rule 8: Overloaded & declining usage checks
        const avg = sum / e.trips.length;
        if (avg > 250) overloadedElevators.push(e.elevator);
        if (e.trips[e.trips.length - 1] < e.trips[0]) decliningUsageElevators.push(e.elevator);
    }

    // Rule 9: Return result
    return { totalTrips, mostUsedElevator, overloadedElevators, decliningUsageElevators };
}

// Example Usage
const elevatorResult = elevatorUsageAnalyzer([
    { elevator: "Lift A", trips: [120, 140, 160, 180, 210] },
    { elevator: "Lift B", trips: [300, 290, 280, 270, 260] },
    { elevator: "Lift C", trips: [100, 110, 120, 130, 140] },
]);

console.log(elevatorResult);