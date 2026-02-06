/**
 * PROBLEM–04: 🏥 Health-Risk Assessment Engine

 * Logic: Categorizes health risk based on BMI and smoking habits.
 */

function healthRiskAnalyzer(bmi, age, isSmoker) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof bmi !== 'number' || bmi <= 0 || typeof age !== 'number' || age <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: ASSESSMENT LOGIC ---
    // Rule: High risk if BMI is over 30 or if overweight (BMI > 25) and smoker
    if (bmi > 30 || (bmi > 25 && isSmoker === true)) {
        return { riskLevel: "High", recommendation: "Consult Doctor Immediately" };
    }
    // Rule: Moderate risk for smokers within normal BMI range
    else if (bmi >= 18.5 && bmi <= 25 && isSmoker === true) {
        return { riskLevel: "Moderate", recommendation: "Quit Smoking" };
    }
    // Rule: Low risk for non-smokers within normal BMI range
    else if (bmi >= 18.5 && bmi <= 25 && isSmoker === false) {
        return { riskLevel: "Low", recommendation: "Maintain Current Lifestyle" };
    }
    // Rule: Nutritional risk for underweight individuals
    else {
        return { riskLevel: "Nutritional Risk", recommendation: "Increase Caloric Intake" };
    }
}

// --- EXAMPLE USAGE ---
console.log(healthRiskAnalyzer(28, 35, true));
console.log(healthRiskAnalyzer(22, 25, false));