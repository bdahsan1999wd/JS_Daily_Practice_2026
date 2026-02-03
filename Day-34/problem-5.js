/**
 * PROBLEM–05: 📈 Smart Investment Risk Analyzer
 * Objective: Evaluate financial risk and calculate potential percentage returns
 * based on amount, duration, and user experience.
 */

function investmentAnalyzer(amount, duration, isExperienced) {

    // --- STEP 1: INPUT VALIDATION ---
    /**
     * Rules:
     * 1. amount and duration must be numbers greater than 0.
     * 2. isExperienced must be a boolean (true/false).
     */
    if (typeof amount !== 'number' || amount <= 0) {
        return "Invalid Input";
    }
    if (typeof duration !== 'number' || duration <= 0) {
        return "Invalid Input";
    }
    if (typeof isExperienced !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE BASE RISK LEVEL ---
    /**
     * We start by figuring out the risk based ONLY on the numbers:
     * - High Risk: If the amount is over 100,000 AND duration is less than 2 years.
     * - Low Risk: If the investment is long-term (5 years or more).
     * - Medium Risk: Default for anything else.
     */
    let riskLevel = "Medium"; // Start with a default

    if (amount > 100000 && duration < 2) {
        riskLevel = "High";
    } else if (duration >= 5) {
        riskLevel = "Low";
    }

    // --- STEP 3: EXPERIENCE ADJUSTMENT (Downgrading Risk) ---
    /**
     * If the user is an experienced investor, we lower their risk tier by one stage:
     * - High becomes Medium.
     * - Medium becomes Low.
     * - Low stays Low (it's already the lowest possible).
     */
    if (isExperienced === true) {
        if (riskLevel === "High") {
            riskLevel = "Medium";
        } else if (riskLevel === "Medium") {
            riskLevel = "Low";
        }
    }

    // --- STEP 4: CALCULATE ESTIMATED RETURN ---
    /**
     * Every risk level has a specific return percentage:
     * - High: 40% return
     * - Medium: 20% return
     * - Low: 10% return
     */
    let estimatedReturn = "";

    if (riskLevel === "High") {
        estimatedReturn = "40%";
    } else if (riskLevel === "Medium") {
        estimatedReturn = "20%";
    } else if (riskLevel === "Low") {
        estimatedReturn = "10%";
    }

    // --- STEP 5: RETURN THE FINAL RESULT ---
    return {
        riskLevel: riskLevel,
        estimatedReturn: estimatedReturn
    };
}

// --- EXAMPLE USAGE ---
console.log(investmentAnalyzer(200000, 1, false));
console.log(investmentAnalyzer(200000, 1, true));