function stockVolatilityAnalyzer(stocks) {

    // Step 1: Input must be a non-empty array
    if (!Array.isArray(stocks) || stocks.length === 0) return "Invalid Input";

    const averagePrice = {};          // Store average per company
    const volatileCompanies = [];     // Companies having any day change > 10
    const decliningCompanies = [];    // Companies where last day < first day
    const names = new Set();           // For duplicate check

    let mostValuableCompany = "";
    let maxAverage = -Infinity;

    // Step 2: Loop through each stock object
    for (let s of stocks) {

        // Step 3: Validate stock object structure
        if (!s || typeof s.company !== "string" || !Array.isArray(s.prices) || s.prices.length === 0) {
            return "Invalid Input";
        }

        // Step 4: Check duplicate company names
        if (names.has(s.company)) return "Invalid Input";
        names.add(s.company);

        let sum = 0;
        let isVolatile = false;

        // Step 5: Process daily prices
        for (let i = 0; i < s.prices.length; i++) {

            // Validate each price value
            if (typeof s.prices[i] !== "number" || s.prices[i] < 0) return "Invalid Input";

            sum += s.prices[i];

            // Check volatile rule (day-to-day change > 10)
            if (i > 0 && Math.abs(s.prices[i] - s.prices[i - 1]) > 10) {
                isVolatile = true;
            }
        }

        // Step 6: Calculate average
        let avg = sum / s.prices.length;
        averagePrice[s.company] = Number(avg.toFixed(2));

        // Step 7: Track most valuable company
        if (avg > maxAverage) {
            maxAverage = avg;
            mostValuableCompany = s.company;
        }

        // Step 8: Check declining company
        if (s.prices[s.prices.length - 1] < s.prices[0]) {
            decliningCompanies.push(s.company);
        }

        // Step 9: Push volatile companies
        if (isVolatile) volatileCompanies.push(s.company);
    }

    // Step 10: Return final result
    return {
        averagePrice,
        mostValuableCompany,
        volatileCompanies,
        decliningCompanies
    };
}

// Example Usage
const stockResult = stockVolatilityAnalyzer([
    { company: "Company A", prices: [120, 125, 130, 128, 135] },
    { company: "Company B", prices: [80, 78, 82, 85, 79] },
]);

console.log(stockResult);