function powerConsumptionAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalUsage = {};
    const factorySet = new Set();
    const inefficientFactories = [];
    const unstableFactories = [];
    let highestConsumer = "";
    let maxTotal = -1;

    // Rule 3: Process each factory
    for (let f of data) {

        // Rule 4: Validate structure
        if (!f || typeof f.factory !== "string" || !Array.isArray(f.usage) || f.usage.length === 0)
            return "Invalid Input";

        // Rule 5: Duplicate check
        if (factorySet.has(f.factory)) return "Invalid Input";
        factorySet.add(f.factory);

        // Rule 6: Validate usage & calculate
        let sum = 0;
        let unstable = false;

        for (let i = 0; i < f.usage.length; i++) {
            const v = f.usage[i];
            if (typeof v !== "number" || v < 0) return "Invalid Input";
            sum += v;

            if (i > 0 && Math.abs(f.usage[i] - f.usage[i - 1]) > 50) {
                unstable = true;
            }
        }

        totalUsage[f.factory] = sum;

        // Rule 7: Track highest consumer
        if (sum > maxTotal) {
            maxTotal = sum;
            highestConsumer = f.factory;
        }

        // Rule 8: Inefficient & unstable check
        const avg = sum / f.usage.length;
        if (avg > 450) inefficientFactories.push(f.factory);
        if (unstable) unstableFactories.push(f.factory);
    }

    // Rule 9: Return result
    return { totalUsage, highestConsumer, inefficientFactories, unstableFactories };
}


// Example Usage
console.log(powerConsumptionAnalyzer([
    { factory: "Factory A", usage: [400, 420, 450, 470, 500] },
    { factory: "Factory B", usage: [200, 210, 190, 205, 195] },
]));
