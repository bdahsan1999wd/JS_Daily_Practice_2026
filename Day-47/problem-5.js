/**
 * 📢 PROBLEM–05: getComplaintPriority()

 * Uses conditional logic to sort utility issues.
 */

function getComplaintPriority(category, isUrgent) {

    // --- STEP 1: VALIDATION ---
    const allowed = ["Electricity", "Water", "Internet"];
    if (!allowed.includes(category) || typeof isUrgent !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: LOGICAL CONDITIONALS ---
    // Priority 1: Emergency (Most specific condition)
    if (category === "Electricity" && isUrgent === true) {
        return "Emergency";
    }

    // Priority 2: High (Broad condition)
    // This catches Electricity (not urgent) OR any other category that IS urgent.
    if (category === "Electricity" || isUrgent === true) {
        return "High";
    }

    // Priority 3: Standard (Everything else)
    return "Standard";
}

// --- EXAMPLE USAGE ---
console.log(getComplaintPriority("Electricity", true));
console.log(getComplaintPriority("Water", true));
console.log(getComplaintPriority("Internet", false));