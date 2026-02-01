// PROBLEM–05: 🎓 Smart Exam Result Analyzer

// Goal: Determine passing status based on average, attendance, and subject failure.

function examAnalyzer(scores, attendance) {

    // --- STEP 1: VALIDATION ---
    // - 'scores' must be a non-empty array
    // - 'attendance' must be a number between 0 and 100 (inclusive)
    // If any of these conditions fail, return "Invalid Input"
    if (!Array.isArray(scores) || scores.length === 0 || typeof attendance !== 'number' || attendance < 0 || attendance > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: SCORE ANALYSIS (AVERAGE & CRITICAL FAILURE) ---
    let totalSum = 0;
    let hasFailedSubject = false;

    // We loop through the array to check every single score.
    for (let i = 0; i < scores.length; i++) {
        let currentScore = scores[i];

        // Validate each score in the array is a number between 0 and 100.
        if (typeof currentScore !== 'number' || currentScore < 0 || currentScore > 100) {
            return "Invalid Input";
        }

        // Critical Rule: If any single subject is below 33, it is an instant failure.
        if (currentScore < 33) {
            hasFailedSubject = true;
        }

        // Add current score to total for average calculation later.
        totalSum += currentScore;
    }

    // --- STEP 3: PASS/FAIL DETERMINATION ---
    // Calculate average by dividing total sum by the number of subjects.
    const averageScore = totalSum / scores.length;
    let finalResult = "Fail";

    // Pass Rule: No subject below 33 AND average >= 50 AND attendance >= 75.
    if (!hasFailedSubject && averageScore >= 50 && attendance >= 75) {
        finalResult = "Pass";
    }

    // --- STEP 4: RETURN FINAL DATA ---
    return {
        result: finalResult,
        finalScores: scores
    };
}

// --- EXAMPLE USAGE ---
console.log(examAnalyzer([50, 60, 65], 80));
console.log(examAnalyzer([80, 20, 90], 90));