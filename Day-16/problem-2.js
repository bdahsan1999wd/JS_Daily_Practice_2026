function energyTracker(devices) {

    // Rule 1: Validate input
    if (!Array.isArray(devices) || devices.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalConsumption = {};
    const deviceNames = new Set();
    let highestConsumptionDevice = "";
    let maxConsumption = -1;
    const lowUsageDevices = [];

    // Rule 3: Process each device
    for (let d of devices) {
        // Rule 4: Validate device
        if (!d || typeof d.device !== "string" || !Array.isArray(d.dailyUsage)) return "Invalid Input";

        // NEW: dailyUsage cannot be empty
        if (d.dailyUsage.length === 0) return "Invalid Input";

        // Rule 5: Check duplicate device names
        if (deviceNames.has(d.device)) return "Invalid Input";
        deviceNames.add(d.device);

        let sum = 0;

        // Rule 6: Validate daily usage and calculate total
        for (let u of d.dailyUsage) {
            if (typeof u !== "number" || u < 0) return "Invalid Input";
            sum += u;
        }

        totalConsumption[d.device] = sum;

        // Rule 7: Track highest consumption
        if (sum > maxConsumption) {
            maxConsumption = sum;
            highestConsumptionDevice = d.device;
        }

        // Rule 8: Check low average usage
        let avg = sum / d.dailyUsage.length;
        if (avg < 3) lowUsageDevices.push(d.device);
    }

    // Rule 9: Return result
    return { totalConsumption, highestConsumptionDevice, lowUsageDevices };
}

// Example Usage:
console.log(energyTracker([
    { device: "AC", dailyUsage: [5, 6, 4] },
    { device: "Heater", dailyUsage: [2, 3, 1] },
]));