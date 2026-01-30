function solarUsage(sunHours, panelCapacity, dailyConsumption) {

    // ==========================
    // Step 1: Input Validation
    // ==========================
    // Ensure all inputs are numbers and greater than 0
    if (
        typeof sunHours !== "number" || sunHours <= 0 ||            // sunHours must be positive
        typeof panelCapacity !== "number" || panelCapacity <= 0 ||  // panelCapacity must be positive
        typeof dailyConsumption !== "number" || dailyConsumption <= 0 // dailyConsumption must be positive
    ) {
        return "Invalid Input"; // Reject invalid inputs
    }

    // ==========================
    // Step 2: Calculate Energy Produced
    // ==========================
    // Formula: energy produced = hours of sunlight × panel capacity
    let energyProduced = sunHours * panelCapacity;

    // ==========================
    // Step 3: Check Consumption Coverage
    // ==========================
    // Can the produced energy meet or exceed daily consumption?
    let canCoverConsumption = energyProduced >= dailyConsumption;

    // ==========================
    // Step 4: Return Results
    // ==========================
    return {
        energyProduced,       // Total energy generated today
        canCoverConsumption   // true if energy meets/exceeds consumption, false otherwise
    };
}

// --- Example Usage ---
console.log(solarUsage(5, 4, 25));