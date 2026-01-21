function trafficSignalScheduler(intersections) {

    // --- Input Validation ---
    // Rule: intersections must be an array
    if (!Array.isArray(intersections)) return "Invalid Input";

    const names = new Set(); // To check duplicate intersection names
    const greenCount = {};   // Track how many times each intersection gets green
    const schedule = [];     // Track cycle schedule

    for (const i of intersections) {
        // Validate intersection object
        if (!i.name || typeof i.name !== "string" || typeof i.trafficDensity !== "number" || typeof i.emergency !== "boolean") return "Invalid Input";
        if (names.has(i.name)) return "Invalid Input"; // Rule: no duplicate intersections
        names.add(i.name);
        greenCount[i.name] = 0; // Initialize green count
    }

    // --- Simulate 10 cycles ---
    for (let cycle = 1; cycle <= 10; cycle++) {
        // Scheduling priority logic
        // Rule: Emergency roads get priority, then higher trafficDensity
        intersections.sort((a, b) => b.emergency - a.emergency || b.trafficDensity - a.trafficDensity);

        const green = intersections[0].name; // Pick the intersection with highest priority
        schedule.push({ cycle, green });
        greenCount[green]++; // Track green counts
    }

    // --- Return result ---
    return { schedule, greenCount };
}

// --- Example Usage ---
const trafficResult = trafficSignalScheduler([
    { name: "Main St", trafficDensity: 30, emergency: false },
    { name: "1st Ave", trafficDensity: 50, emergency: true }
]);

console.log(trafficResult);