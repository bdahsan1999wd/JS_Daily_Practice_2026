/**
 * PROBLEM–04: 🎓 Student Scholarship Automated System

 * Logic: Evaluates student eligibility for national stipends based on
 * academic performance (GPA), consistency (Attendance), and financial need.
 */

function evaluateScholarship(gpa, attendance, familyIncome) {

    // --- STEP 1: INPUT VALIDATION ---
    // GPA must be between 0.0 and 5.0
    // Attendance must be between 0 and 100 (%)
    // Family Income must be a positive number
    if (
        typeof gpa !== 'number' || gpa < 0 || gpa > 5.0 ||
        typeof attendance !== 'number' || attendance < 0 || attendance > 100 ||
        typeof familyIncome !== 'number' || familyIncome < 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: GOLD SCHOLARSHIP EVALUATION ---
    // Highest priority: Requires top grades, high attendance, and lower income bracket
    if (gpa >= 4.5 && attendance >= 90 && familyIncome < 25000) {
        return "Gold";
    }

    // --- STEP 3: SILVER SCHOLARSHIP EVALUATION ---
    // Second priority: Moderate requirements for GPA, attendance, and income
    else if (gpa >= 4.0 && attendance >= 80 && familyIncome < 50000) {
        return "Silver";
    }

    // --- STEP 4: DEFAULT STATUS ---
    // If any criteria for Gold or Silver are not met
    else {
        return "Not Eligible";
    }
}

// --- EXAMPLE USAGE ---
console.log(evaluateScholarship(4.8, 95, 20000));
console.log(evaluateScholarship(4.2, 85, 30000));
console.log(evaluateScholarship(4.1, 75, 15000));
console.log(evaluateScholarship(3.5, 90, 10000));
console.log(evaluateScholarship(5.2, 90, 20000));