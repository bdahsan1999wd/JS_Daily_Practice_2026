/**
 * 🧩 PROBLEM–02: 🚰 Water Usage Billing

 * * Logic: Calculates a utility bill based on a base fee plus tiered consumption rates.
 * Higher consumption triggers higher rates per liter.
 */

function calculateWaterBill(litersUsed) {

    // --- STEP 1: HARDENED VALIDATION ---
    // Block NaN, Infinity, and negative numbers. Only finite positive numbers allowed.
    if (!Number.isFinite(litersUsed) || litersUsed < 0) {
        return "Invalid Input";
    }

    let totalBill = 10; // Standard $10 base fee for all accounts.

    // --- STEP 2: TIERED PRICING CALCULATION ---

    // Bracket 1: First 100 liters are free (only base fee).
    if (litersUsed <= 100) {
        return totalBill;
    }
    // Bracket 2: 101 to 500 liters (charged at $0.05/L).
    else if (litersUsed <= 500) {
        // We subtract the 100 free liters from the total usage.
        totalBill += (litersUsed - 100) * 0.05;
    }
    // Bracket 3: Above 500 liters (charged at $0.10/L).
    else {
        // add the full cost of Bracket 2 (400 liters * 0.05 = $20)
        // plus the surplus above 500 liters at the Bracket 3 rate.
        totalBill += 20 + (litersUsed - 500) * 0.10;
    }

    return totalBill;
}

// --- EXAMPLE USAGE ---
console.log(calculateWaterBill(600));
console.log(calculateWaterBill(-5));
console.log(calculateWaterBill(NaN));