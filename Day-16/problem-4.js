function vehicleEfficiencyMonitor(vehicles) {
    
    // Rule 1: Validate input
    if (!Array.isArray(vehicles) || vehicles.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const efficiency = {};
    const vehicleNames = new Set();
    let mostEfficient = "";
    let maxEfficiency = -1;
    const inefficientVehicles = [];

    // Rule 3: Process each vehicle
    for (let v of vehicles) {
        // Rule 4: Validate vehicle
        if (!v || typeof v.vehicle !== "string" || typeof v.distanceKm !== "number" || typeof v.fuelLiters !== "number")
            return "Invalid Input";

        if (v.distanceKm <= 0 || v.fuelLiters <= 0) return "Invalid Input";

        // Rule 5: Check duplicate vehicle
        if (vehicleNames.has(v.vehicle)) return "Invalid Input";
        vehicleNames.add(v.vehicle);

        // Rule 6: Calculate efficiency
        let eff = v.distanceKm / v.fuelLiters;
        eff = Math.round(eff * 100) / 100;

        efficiency[v.vehicle] = eff;

        // Rule 7: Track most efficient
        if (eff > maxEfficiency) {
            maxEfficiency = eff;
            mostEfficient = v.vehicle;
        }

        // Rule 8: Track inefficient vehicles
        if (eff < 5) inefficientVehicles.push(v.vehicle);
    }

    // Rule 9: Return result
    return { efficiency, mostEfficient, inefficientVehicles };
}

// Example Usage:
console.log(vehicleEfficiencyMonitor([
    { vehicle: "Bus 101", distanceKm: 120, fuelLiters: 15 },
    { vehicle: "Bus 102", distanceKm: 80, fuelLiters: 12 },
]));
