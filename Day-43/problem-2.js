// 🧩 PROBLEM–02: 🍚 Digital Relief Distribution

// Logic: Dynamically generates a relief package object based on family size and the severity of the flood.

function calculateRelief(familyMembers, floodLevel, hasGovtCard) {

    // --- STEP 1: INPUT VALIDATION ---
    // familyMembers must be a positive integer, floodLevel cannot be negative
    if (
        typeof familyMembers !== 'number' || familyMembers <= 0 || !Number.isInteger(familyMembers) ||
        typeof floodLevel !== 'number' || floodLevel < 0 ||
        typeof hasGovtCard !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: RICE ALLOCATION ---
    let riceKg = 10; // Start with the baseline relief for every family

    // Add an environmental surge (5kg) if flood levels are critical (>200cm)
    if (floodLevel > 200) riceKg += 5;

    // Add extra food for large families (more than 5 members)
    // Every additional person adds 2kg to the total
    if (familyMembers > 5) {
        const extraMembers = familyMembers - 5;
        riceKg += (extraMembers * 2);
    }

    // --- STEP 3: WATER ALLOCATION ---
    let waterLiters = 5; // Start with the standard water quota

    // Double the water liters if the family holds a verified government card
    if (hasGovtCard) waterLiters *= 2;

    // Return the final relief package as an structured object
    return { riceKg, waterLiters };
}

// --- EXAMPLE USAGE ---
console.log(calculateRelief(7, 150, false));
console.log(calculateRelief(4, 250, true));