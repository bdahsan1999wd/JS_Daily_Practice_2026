/**
 * 🏗️ PROBLEM–01: calculateCompensation()

 * Logic: Calculates aid based on percentage but enforces a "Cap" (Maximum limit).
 */

function calculateCompensation(damageType, estimatedLoss) {
    
    // --- STEP 1: VALIDATION ---
    // Ensure damageType is a string and estimatedLoss is a positive number.
    if (typeof damageType !== 'string' || typeof estimatedLoss !== 'number' || estimatedLoss <= 0) {
        return "Invalid Input";
    }

    let compensation = 0;

    // --- STEP 2: APPLY TIERED PERCENTAGES AND CAPS ---
    if (damageType === "Business") {
        // 20% of loss, but cannot exceed 100,000
        compensation = Math.min(estimatedLoss * 0.20, 100000);
    }
    else if (damageType === "Home") {
        // 30% of loss, but cannot exceed 50,000
        compensation = Math.min(estimatedLoss * 0.30, 50000);
    }
    else if (damageType === "Vehicle") {
        // 50% of loss, but cannot exceed 40,000
        compensation = Math.min(estimatedLoss * 0.50, 40000);
    }
    else {
        // If the damageType is not in the approved list
        return "Invalid Input";
    }

    return compensation;
}

// --- EXAMPLE USAGE ---
console.log(calculateCompensation("Business", 600000));
console.log(calculateCompensation("Home", 100000));
console.log(calculateCompensation("Mobile", 5000));