function minShipCapacity(weights, days) {

    // Input validation
    if (!Array.isArray(weights) || typeof days !== "number" || days <= 0) return "Invalid Input";
    for (let w of weights) {
        if (typeof w !== "number" || w <= 0) return "Invalid Input";
    }

    // Binary Search on answer
    let left = Math.max(...weights); // Min capacity must at least fit largest package
    let right = weights.reduce((a, b) => a + b, 0); // Max capacity = sum of all weights

    // Helper function to check if capacity 'cap' can ship in <= days
    const canShip = (cap) => {
        let d = 1, curr = 0;
        for (let w of weights) {
            if (curr + w > cap) {
                d++;        // Need next day
                curr = 0;   // Reset current day load
            }
            curr += w;     // Add package to current day
        }
        return d <= days;
    }

    // Binary search loop
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canShip(mid)) right = mid; // Mid capacity works → try smaller
        else left = mid + 1;            // Mid too small → increase
    }

    return left; // Minimum capacity that works
}

// Example
console.log(minShipCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));