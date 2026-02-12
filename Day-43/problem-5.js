// 🧩 PROBLEM–05: 📈 NBR Income Tax Calculator

// Logic: Implements progressive taxation thresholds with social considerations (gender) and investment incentives.

function calculateTax(monthlySalary, isFemale, hasInvestment) {
    
    // --- STEP 1: INPUT VALIDATION ---
    if (typeof monthlySalary !== 'number' || monthlySalary < 0 ||
        typeof isFemale !== 'boolean' ||
        typeof hasInvestment !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTAL EARNINGS & EXEMPTIONS ---
    const annualIncome = monthlySalary * 12;
    // Females get a higher tax-free limit (400k) compared to males (350k)
    const threshold = isFemale ? 400000 : 350000;

    // --- STEP 3: BASE TAX CALCULATION ---
    // If income is below threshold, no tax is owed
    if (annualIncome <= threshold) return 0;

    // Tax is only applied to the surplus income (amount over threshold)
    const taxableAmount = annualIncome - threshold;
    let tax = taxableAmount * 0.10; // Standard 10% rate on taxable surplus

    // --- STEP 4: INVESTMENT INCENTIVE (REBATE) ---
    // If the citizen has invested, reward them with a 15% discount on tax
    if (hasInvestment) {
        tax = tax * 0.85;
    }

    // --- STEP 5: MINIMUM TAX FLOOR ---
    // According to NBR policy, if any tax is generated, it cannot be less than 5000 TK
    if (tax > 0 && tax < 5000) return 5000;

    return tax;
}

// --- EXAMPLE USAGE ---
console.log(calculateTax(40000, false, false));
console.log(calculateTax(30000, true, false));
console.log(calculateTax(32000, false, true));