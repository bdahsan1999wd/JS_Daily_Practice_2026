function serverCpuLoadAnalyzer(servers) {

    // Step 1: Input must be a non-empty array
    if (!Array.isArray(servers) || servers.length === 0) return "Invalid Input";

    const averageLoad = {};          // Store average per server
    const overloadedServers = [];    // Servers having any day load > 75
    const stableServers = [];        // Servers where (max - min) < 10
    const names = new Set();          // For duplicate check

    let mostLoadedServer = "";
    let maxAverage = -Infinity;

    // Step 2: Loop through each server object
    for (let s of servers) {

        // Step 3: Validate server object structure
        if (!s || typeof s.server !== "string" || !Array.isArray(s.load) || s.load.length === 0) {
            return "Invalid Input";
        }

        // Step 4: Check duplicate server names
        if (names.has(s.server)) return "Invalid Input";
        names.add(s.server);

        let sum = 0;
        let isOverloaded = false;

        let max = -Infinity;
        let min = Infinity;

        // Step 5: Process daily load
        for (let i = 0; i < s.load.length; i++) {

            // Validate each load value
            if (typeof s.load[i] !== "number" || s.load[i] < 0) return "Invalid Input";

            const val = s.load[i];
            sum += val;

            // Check overloaded rule
            if (val > 75) isOverloaded = true;

            // Track max & min for stability
            if (val > max) max = val;
            if (val < min) min = val;
        }

        // Step 6: Calculate average
        let avg = sum / s.load.length;
        averageLoad[s.server] = Number(avg.toFixed(2));

        // Step 7: Track most loaded server
        if (avg > maxAverage) {
            maxAverage = avg;
            mostLoadedServer = s.server;
        }

        // Step 8: Push overloaded servers
        if (isOverloaded) overloadedServers.push(s.server);

        // Step 9: Check stable servers
        if (max - min < 10) {
            stableServers.push(s.server);
        }
    }

    // Step 10: Return final result
    return {
        averageLoad,
        mostLoadedServer,
        overloadedServers,
        stableServers
    };
}


// Example Usage
const serverResult = serverCpuLoadAnalyzer([
    { server: "Server A", load: [45, 50, 55, 60, 65] },
    { server: "Server B", load: [70, 68, 72, 75, 73] },
    { server: "Server C", load: [30, 35, 32, 38, 40] },
]);

console.log(serverResult);