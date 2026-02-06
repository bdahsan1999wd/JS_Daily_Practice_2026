/**
 * PROBLEM–03: 👨‍💻 Recruitment Shortlist Filter

 * Logic: Filters candidates based on experience and specific skill requirements.
 */

function shortlistCandidate(yearsExp, skills, expectedSalary) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof yearsExp !== 'number' || yearsExp < 0 || !Array.isArray(skills) || typeof expectedSalary !== 'number' || expectedSalary <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: OVERQUALIFIED CHECK ---
    // Highly experienced candidates (over 10 years) are flagged for manual senior-role review
    if (yearsExp > 10) {
        return { status: "Review Manually", recommendation: "Consider for Senior Role" };
    }

    // --- STEP 3: SELECTION CRITERIA ---
    // Candidate must have 3+ years exp, know JavaScript, and stay within budget
    if (yearsExp >= 3 && skills.includes("JavaScript") && expectedSalary <= 50000) {
        return { status: "Shortlisted", recommendation: "Schedule Interview" };
    }

    // --- STEP 4: REJECTION ---
    return { status: "Rejected", recommendation: "Send Feedback Email" };
}

// --- EXAMPLE USAGE ---
console.log(shortlistCandidate(5, ["HTML", "JavaScript"], 45000));
console.log(shortlistCandidate(12, ["JavaScript"], 80000));