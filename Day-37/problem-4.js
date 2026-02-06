/**
 * PROBLEM–04: 📱 Mobile Data Pack Suggestor
 
 * Logic: Prioritizes plans based on usage patterns and financial availability.
 */

function dataPackAdvisor(usageGB, budget, prefersNightPack) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof usageGB !== 'number' || usageGB <= 0 || typeof budget !== 'number' || budget <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: PLAN SELECTION LOGIC ---
    // Logic follows a priority order: Night Pack > Professional > Standard > Basic

    // Priority 1: Check for Night users with sufficient budget
    if (prefersNightPack && budget >= 150) {
        return "Night Owl Unlimited";
    }

    // Priority 2: Check for High-volume users (Over 50GB)
    if (usageGB > 50 && budget >= 500) {
        return "Professional Pack";
    }

    // Priority 3: Check for Mid-range users (10-50GB)
    if (usageGB >= 10 && usageGB <= 50 && budget >= 300) {
        return "Standard Monthly";
    }

    // Priority 4: Default fallback for low usage or low budget
    return "Basic Pay-As-You-Go";
}

// --- EXAMPLE USAGE ---
console.log(dataPackAdvisor(60, 600, false));
console.log(dataPackAdvisor(5, 100, true));