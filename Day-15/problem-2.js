function gymUsage(equipments) {
    // Rule 1: Validate input
    if (!Array.isArray(equipments) || equipments.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const usageTotals = {};
    let topEquipment = { equipment: "", totalHours: 0 };
    const equipmentNames = new Set();

    // Rule 3: Process each equipment
    for (let eq of equipments) {
        // Rule 4: Validate equipment
        if (!eq || typeof eq.equipment !== "string" || !Array.isArray(eq.hours) || eq.hours.length === 0)
            return "Invalid Input";

        // Rule 5: Check duplicate equipment names
        if (equipmentNames.has(eq.equipment)) return "Invalid Input";
        equipmentNames.add(eq.equipment);

        let total = 0;

        // Rule 6: Validate hours and calculate total
        for (let h of eq.hours) {
            if (typeof h !== "number" || h < 0) return "Invalid Input";
            total += h;
        }

        usageTotals[eq.equipment] = total;

        // Rule 7: Track top equipment
        if (total > topEquipment.totalHours) {
            topEquipment = { equipment: eq.equipment, totalHours: total };
        }
    }

    // Rule 8: Return result
    return { usageTotals, topEquipment };
}

// Example Usage:
console.log(gymUsage([
    { equipment: "Treadmill", hours: [2, 1.5, 2] },
    { equipment: "Bike", hours: [1, 2, 1] }
]));