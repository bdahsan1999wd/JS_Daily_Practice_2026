/**
 * PROBLEM–04: 💰 Employee Annual Bonus

 * Logic: Tiered performance bonus with loyalty add-on and a maximum cap.
 */

function calculateEmployeeBonus(salary, performanceRating, yearsInCompany) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof salary !== 'number' || performanceRating < 1 || performanceRating > 5) {
        return "Invalid Input";
    }

    // --- STEP 2: PERFORMANCE BASED BONUS ---
    let bonus = 0;
    if (performanceRating === 5) bonus = salary * 0.20;
    else if (performanceRating === 4) bonus = salary * 0.10;
    else if (performanceRating === 3) bonus = salary * 0.05;

    // --- STEP 3: LOYALTY BONUS ---
    if (yearsInCompany > 5) {
        bonus += 5000;
    }

    // --- STEP 4: ENFORCE MAXIMUM CAP ---
    // Bonus cannot go above 50,000 TK
    if (bonus > 50000) {
        bonus = 50000;
    }

    return bonus;
}

// --- EXAMPLE USAGE ---
console.log(calculateEmployeeBonus(100000, 5, 2));
console.log(calculateEmployeeBonus(200000, 4, 10));