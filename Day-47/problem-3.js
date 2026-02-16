/**
 * 🏗️ PROBLEM–03: calculateFund()

 * Maps project types to tax rates and computes remaining balance.
 */

function calculateFund(projectType, budget) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof budget !== 'number' || budget <= 0 || typeof projectType !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: FEE MAPPING ---
    let feeRate;
    if (projectType === "Education") {
        feeRate = 0.05; // 5%
    } else if (projectType === "Health") {
        feeRate = 0.10; // 10%
    } else if (projectType === "Infrastructure") {
        feeRate = 0.15; // 15%
    } else {
        return "Invalid Input"; // Unknown project type
    }

    // --- STEP 3: FINAL CALCULATION ---
    const totalDeduction = budget * feeRate;
    return budget - totalDeduction;
}

// --- EXAMPLE USAGE ---
console.log(calculateFund("Education", 1000));
console.log(calculateFund("Infrastructure", 2000));
console.log(calculateFund("Agriculture", 5000));