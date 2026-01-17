function cinemaOccupancyTracker(halls) {

    // Rule 1: Validate input
    if (!Array.isArray(halls) || halls.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const averageOccupancy = {};   // Average occupancy % per hall
    const hallSet = new Set();     // To check duplicate hall names
    const lowOccupancyHalls = [];  // Halls with avg occupancy < 50%
    let mostCrowded = "";          // Hall with highest occupancy
    let maxAvg = -1;

    // Rule 3: Process each hall
    for (let h of halls) {
        // Rule 4: Validate hall object
        if (!h || typeof h.hall !== "string" || !Array.isArray(h.shows) || typeof h.capacity !== "number" || h.capacity <= 0)
            return "Invalid Input";

        // Rule 5: Check duplicate hall names
        if (hallSet.has(h.hall)) return "Invalid Input";
        hallSet.add(h.hall);

        // Rule 6: Validate shows array and calculate total seats
        let sum = 0;
        for (let s of h.shows) {
            if (typeof s !== "number" || s < 0) return "Invalid Input";
            sum += s;
        }

        // Rule 7: Calculate average occupancy percentage
        const avgPercent = h.shows.length ? +(sum / h.shows.length / h.capacity * 100).toFixed(2) : 0;
        averageOccupancy[h.hall] = avgPercent;

        // Rule 8: Track low occupancy halls
        if (avgPercent < 50) lowOccupancyHalls.push(h.hall);

        // Rule 9: Track most crowded hall
        if (avgPercent > maxAvg) {
            maxAvg = avgPercent;
            mostCrowded = h.hall;
        }
    }

    // Rule 10: Return result
    return { averageOccupancy, mostCrowded, lowOccupancyHalls };
}


// Example Usage
console.log(cinemaOccupancyTracker([
    { hall: "Hall 1", shows: [120, 150, 100], capacity: 200 },
    { hall: "Hall 2", shows: [80, 90, 70], capacity: 150 },
]));