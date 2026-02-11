// 🧩 PROBLEM–05: 📈 Stock Market Trade Validator

// Logic: Evaluates market trends by comparing current and previous prices against specific percentage thresholds (10% drop or 15% rise).

function shouldITrade(currentPrice, previousPrice, isMarketOpen) {

    // --- STEP 1: INPUT VALIDATION ---
    if (
        typeof currentPrice !== 'number' || currentPrice <= 0 ||
        typeof previousPrice !== 'number' || previousPrice <= 0 ||
        typeof isMarketOpen !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: MARKET STATUS CHECK ---
    if (isMarketOpen === false) {
        return "Market Closed";
    }

    // --- STEP 3: PRICE ANALYSIS ---

    // Buy Logic: Current price is 10% or more lower than previous
    if (currentPrice <= previousPrice * 0.90) {
        return "Buy";
    }

    // Sell Logic: Current price is 15% or more higher than previous
    if (currentPrice >= previousPrice * 1.15) {
        return "Sell";
    }

    // Otherwise: No significant change
    return "Hold";
}

// --- EXAMPLE USAGE ---
console.log(shouldITrade(90, 100, true));
console.log(shouldITrade(116, 100, true));
console.log(shouldITrade(100, 100, true));