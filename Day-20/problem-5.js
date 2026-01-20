function machinePerformanceAnalyzer(machines) {

    // Step 1: Input must be a non-empty array
    if (!Array.isArray(machines) || machines.length === 0) return "Invalid Input";

    const averageOutput = {};            // Store average per machine
    const underperformingMachines = [];  // Machines having any day output < 100
    const stableMachines = [];           // Machines where (max - min) < 20
    const names = new Set();              // For duplicate check

    let highestPerformingMachine = "";
    let maxAverage = -Infinity;

    // Step 2: Loop through each machine object
    for (let m of machines) {

        // Step 3: Validate machine object structure
        if (!m || typeof m.machine !== "string" || !Array.isArray(m.output) || m.output.length === 0) {
            return "Invalid Input";
        }

        // Step 4: Check duplicate machine names
        if (names.has(m.machine)) return "Invalid Input";
        names.add(m.machine);

        let sum = 0;
        let isUnderperforming = false;

        let max = -Infinity;
        let min = Infinity;

        // Step 5: Process daily output
        for (let i = 0; i < m.output.length; i++) {

            // Validate each output value
            if (typeof m.output[i] !== "number" || m.output[i] < 0) return "Invalid Input";

            const val = m.output[i];
            sum += val;

            // Check underperforming rule
            if (val < 100) isUnderperforming = true;

            // Track max & min for stability
            if (val > max) max = val;
            if (val < min) min = val;
        }

        // Step 6: Calculate average
        let avg = sum / m.output.length;
        averageOutput[m.machine] = Number(avg.toFixed(2));

        // Step 7: Track highest performing machine
        if (avg > maxAverage) {
            maxAverage = avg;
            highestPerformingMachine = m.machine;
        }

        // Step 8: Push underperforming machines
        if (isUnderperforming) underperformingMachines.push(m.machine);

        // Step 9: Check stable machines
        if (max - min < 20) {
            stableMachines.push(m.machine);
        }
    }

    // Step 10: Return final result
    return {
        averageOutput,
        highestPerformingMachine,
        underperformingMachines,
        stableMachines
    };
}

// Example Usage
const machineResult = machinePerformanceAnalyzer([
    { machine: "Machine A", output: [120, 130, 125, 140, 150] },
    { machine: "Machine B", output: [200, 210, 205, 220, 215] },
    { machine: "Machine C", output: [90, 100, 95, 105, 110] },
]);

console.log(machineResult);