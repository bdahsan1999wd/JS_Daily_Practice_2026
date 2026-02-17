/**
 * 🥛 PROBLEM–02: getMilkGrade()

 * Logic: Strict quality control based on fat percentage and cold storage temperature.
 */

function getMilkGrade(fatContent, tempCelsius) {

    // --- STEP 1: RANGE VALIDATION ---
    // fatContent (0-10) and tempCelsius (-5 to 40)
    if (
        typeof fatContent !== 'number' || fatContent < 0 || fatContent > 10 ||
        typeof tempCelsius !== 'number' || tempCelsius < -5 || tempCelsius > 40
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: GRADING LOGIC ---
    // Grade A: High fat and very cold storage.
    if (fatContent > 4.5 && tempCelsius <= 4) {
        return "Grade A";
    }
    // Grade B: Moderate fat and acceptable cooling.
    else if (fatContent >= 3.0 && fatContent <= 4.5 && tempCelsius <= 10) {
        return "Grade B";
    }
    // Rejected: If it doesn't meet Grade A or B standards.
    else {
        return "Rejected";
    }
}

// --- EXAMPLE USAGE ---
console.log(getMilkGrade(5.0, 3));
console.log(getMilkGrade(3.5, 12));
console.log(getMilkGrade(2.0, 4));