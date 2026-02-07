/**
 * PROBLEM–01: 🏃 Gym Membership Calculator
 
 * Logic: Calculates base fee + extra sessions, adds trainer fee, and applies a bulk discount.
 */

function calculateGymCost(baseFee, extraSessions, wantsTrainer) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure baseFee and extraSessions are numbers and not negative
    if (typeof baseFee !== 'number' || baseFee < 0 || typeof extraSessions !== 'number' || extraSessions < 0) {
        return "Invalid Input";
    }

    let totalBill = baseFee;

    // --- STEP 2: CALCULATE EXTRA SESSIONS ---
    // Rule: Only sessions beyond the first 12 are charged extra (200 TK each)
    if (extraSessions > 12) {
        const excess = extraSessions - 12;
        totalBill += (excess * 200);
    }

    // --- STEP 3: ADD TRAINER FEE ---
    // Add 1500 TK if the user opted for a personal trainer
    if (wantsTrainer === true) {
        totalBill += 1500;
    }

    // --- STEP 4: APPLY CONDITIONAL DISCOUNT ---
    // Rule: If total exceeds 4000 TK, give a 10% discount (Multiply by 0.90)
    if (totalBill > 4000) {
        totalBill = totalBill * 0.90;
    }

    return totalBill;
}

// --- EXAMPLE USAGE ---
console.log(calculateGymCost(2000, 15, true));
console.log(calculateGymCost(1500, 10, false));