/**
 * PROBLEM–04: 🚗 Car Service Alert
 
 * Logic: Checks which service threshold (mileage or time) is hit first.
 */

function carServiceAdvisor(mileage, monthsSinceLastService) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof mileage !== 'number' || mileage <= 0 || typeof monthsSinceLastService !== 'number' || monthsSinceLastService <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: PRIORITY LOGIC (Highest service first) ---
    // Major service threshold: 20k km or 1 year
    if (mileage >= 20000 || monthsSinceLastService >= 12) {
        return "Major Service";
    }
    // Intermediate service threshold: 10k km or 6 months
    else if (mileage >= 10000 || monthsSinceLastService >= 6) {
        return "Intermediate Service";
    }
    // Basic threshold: 5k km
    else if (mileage >= 5000) {
        return "Basic Checkup";
    }
    // Default: No action required
    else {
        return "No Service Needed";
    }
}

// --- EXAMPLE USAGE ---
console.log(carServiceAdvisor(25000, 4));
console.log(carServiceAdvisor(3000, 2));