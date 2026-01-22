function loadBalancer(servers, requests) {
    // --- Input Validation ---
    if (!Array.isArray(servers) || typeof requests !== "number" || requests < 0) return "Invalid Input";

    const serverNames = new Set();
    for (const s of servers) {
        if (!s.name || typeof s.name !== "string" || typeof s.load !== "number") return "Invalid Input";
        if (serverNames.has(s.name)) return "Invalid Input"; // no duplicate server names
        serverNames.add(s.name);
    }

    // Initialize distribution
    const distribution = {};
    servers.forEach(s => distribution[s.name] = 0);

    // Make a copy of servers to avoid mutating input
    const serverStates = servers.map(s => ({ ...s }));

    let rejectedRequests = 0;
    const OVERLOAD_THRESHOLD = 100; // can be adjusted

    for (let i = 0; i < requests; i++) {
        // Find the server with the lowest current load
        serverStates.sort((a, b) => a.load - b.load);

        const lowest = serverStates[0];

        if (lowest.load >= OVERLOAD_THRESHOLD) {
            // Cannot assign → rejected
            rejectedRequests++;
        } else {
            // Assign request
            distribution[lowest.name]++;
            lowest.load += 1;
        }
    }

    return { distribution, rejectedRequests };
}

// --- Example Usage ---
const loadResult = loadBalancer(
    [
        { name: "Server A", load: 50 },
        { name: "Server B", load: 80 },
    ],
    5
);

console.log(loadResult);