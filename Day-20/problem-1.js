function solarOutputAnalyzer(panels) {

    // Step 1: Input must be a non-empty array
    if (!Array.isArray(panels) || panels.length === 0) return "Invalid Input";

    const averageOutput = {};          // Store average per panel
    const underperformingPanels = [];  // Panels having any day < 350
    const unstablePanels = [];         // Panels having any day change > 50
    const names = new Set();           // For duplicate check

    let highestProducingPanel = "";
    let maxAverage = -Infinity;

    // Step 2: Loop through each panel object
    for (let p of panels) {

        // Step 3: Validate panel object structure
        if (!p || typeof p.panel !== "string" || !Array.isArray(p.output) || p.output.length === 0) {
            return "Invalid Input";
        }

        // Step 4: Check duplicate panel names
        if (names.has(p.panel)) return "Invalid Input";
        names.add(p.panel);

        let sum = 0;
        let isUnderperforming = false;
        let isUnstable = false;

        // Step 5: Process daily outputs
        for (let i = 0; i < p.output.length; i++) {

            // Validate each output value
            if (typeof p.output[i] !== "number" || p.output[i] < 0) return "Invalid Input";

            sum += p.output[i];

            // Check underperforming rule
            if (p.output[i] < 350) isUnderperforming = true;

            // Check unstable rule (day-to-day change)
            if (i > 0 && Math.abs(p.output[i] - p.output[i - 1]) > 50) {
                isUnstable = true;
            }
        }

        // Step 6: Calculate average
        let avg = sum / p.output.length;
        averageOutput[p.panel] = Number(avg.toFixed(2));

        // Step 7: Track highest producing panel
        if (avg > maxAverage) {
            maxAverage = avg;
            highestProducingPanel = p.panel;
        }

        // Step 8: Push to lists if conditions match
        if (isUnderperforming) underperformingPanels.push(p.panel);
        if (isUnstable) unstablePanels.push(p.panel);
    }

    // Step 9: Return final result
    return {
        averageOutput,
        highestProducingPanel,
        underperformingPanels,
        unstablePanels
    };
}

// Example Usage
const solarResult = solarOutputAnalyzer([
    { panel: "Panel A", output: [400, 420, 450, 470, 500] },
    { panel: "Panel B", output: [300, 310, 320, 330, 340] },
]);

console.log(solarResult);