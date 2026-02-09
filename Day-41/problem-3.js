/**
 * PROBLEM–03: 🏢 Trade License Fee Calculator

 * Logic: Calculates annual municipal fees based on business sector,
 * location-based subsidies, and long-term business loyalty discounts.
 */

function calculateLicenseFee(businessType, isRural, yearsActive) {

    // --- STEP 1: INPUT VALIDATION ---
    // Ensure yearsActive is a non-negative number
    // Ensure businessType is one of the three supported categories
    // Ensure isRural is a boolean
    if (
        typeof yearsActive !== 'number' || yearsActive < 0 ||
        typeof isRural !== 'boolean' ||
        (businessType !== "Retail" && businessType !== "Manufacturing" && businessType !== "IT")
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: ASSIGN BASE FEE ---
    let baseFee = 0;
    if (businessType === "Retail") {
        baseFee = 5000;
    } else if (businessType === "Manufacturing") {
        baseFee = 15000;
    } else if (businessType === "IT") {
        baseFee = 2000;
    }

    // --- STEP 3: APPLY RURAL SUBSIDY ---
    // Rule: If the business is in a rural area, reduce the base fee by 40%
    if (isRural === true) {
        baseFee = baseFee * 0.60; // (100% - 40% = 60% or 0.60)
    }

    // --- STEP 4: APPLY LOYALTY DISCOUNT ---
    // Rule: Businesses active for more than 10 years get a 1000 TK discount
    let finalFee = baseFee;
    if (yearsActive > 10) {
        finalFee -= 1000;
    }

    // --- STEP 5: MINIMUM FEE ENFORCEMENT ---
    // Rule: The final fee cannot drop below 500 TK regardless of discounts
    if (finalFee < 500) {
        finalFee = 500;
    }

    // Return the final calculated license fee
    return finalFee;
}

// --- EXAMPLE USAGE ---
console.log(calculateLicenseFee("IT", false, 1));
console.log(calculateLicenseFee("Manufacturing", true, 12));
console.log(calculateLicenseFee("Retail", true, 20));
console.log(calculateLicenseFee("IT", true, 15));