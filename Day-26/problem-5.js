function minDaysToShip(packages, dailyLimit) {

    // Input validation
    if (!Array.isArray(packages) || typeof dailyLimit !== "number" || dailyLimit <= 0) return "Invalid Input";
    for (let p of packages) if (typeof p !== "number" || p <= 0) return "Invalid Input";
    if (packages.some(p => p > dailyLimit)) return "Invalid Input"; // any package too heavy

    let days = 1; // start counting from day 1
    let currentLoad = 0; // current total weight for the day

    for (let p of packages) {
        if (currentLoad + p <= dailyLimit) {
            // Add package to current day
            currentLoad += p;
        } else {
            // Exceeds daily limit → start a new day
            days++;
            currentLoad = p; // current package starts new day's load
        }
    }

    return days;
}

// Example Usage:
console.log(minDaysToShip([5, 3, 4, 7, 2, 6, 4], 10));