/**
 * PROBLEM–02: 💻 Freelancer Project Deadline
 
 * Logic: Compares required hours against total available hours (days * hours/day).
 */

function projectDeadlineStatus(totalHoursNeeded, daysLeft, hoursPerDay) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof totalHoursNeeded !== 'number' || totalHoursNeeded <= 0 ||
        typeof daysLeft !== 'number' || daysLeft <= 0 ||
        typeof hoursPerDay !== 'number' || hoursPerDay <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTAL CAPACITY ---
    const totalAvailableHours = daysLeft * hoursPerDay;

    // --- STEP 3: COMPARE AND RETURN OBJECT ---
    if (totalAvailableHours >= totalHoursNeeded) {
        // Project can be finished within schedule
        return { canComplete: true, requiredExtraHours: 0 };
    } else {
        // Calculate the deficit (missing hours)
        const diff = totalHoursNeeded - totalAvailableHours;
        return { canComplete: false, requiredExtraHours: diff };
    }
}

// --- EXAMPLE USAGE ---
console.log(projectDeadlineStatus(40, 5, 8));
console.log(projectDeadlineStatus(50, 5, 6));