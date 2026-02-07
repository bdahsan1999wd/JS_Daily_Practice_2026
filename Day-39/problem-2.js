/**
 * PROBLEM–02: 💻 Freelance Gig Estimator

 * Logic: Adds complexity percentages and flat urgency fees.
 */

function calculateGigQuote(basePrice, isUrgent, complexity) {

    // --- STEP 1: INPUT VALIDATION ---
    if (typeof basePrice !== 'number' || basePrice <= 0) {
        return "Invalid Input";
    }

    let currentPrice = basePrice;

    // --- STEP 2: COMPLEXITY SURCHARGE ---
    // Medium adds 20%, High adds 50%
    if (complexity === "Medium") {
        currentPrice += basePrice * 0.20;
    } else if (complexity === "High") {
        currentPrice += basePrice * 0.50;
    }

    // --- STEP 3: URGENT FLAT FEE ---
    if (isUrgent === true) {
        currentPrice += 2000;
    }

    // --- STEP 4: PLATFORM SERVICE CHARGE ---
    // Final bill includes a 5% platform fee
    const finalQuote = currentPrice * 1.05;

    return finalQuote;
}

// --- EXAMPLE USAGE ---
console.log(calculateGigQuote(5000, false, "Medium"));
console.log(calculateGigQuote(10000, true, "High"));