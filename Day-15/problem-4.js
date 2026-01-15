function taxSummary(taxpayers) {
    // Rule 1: Validate input
    if (!Array.isArray(taxpayers) || taxpayers.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const taxes = {};
    let totalTax = 0;
    let highestTaxpayer = { name: "", tax: 0 };
    const namesSet = new Set();

    // Rule 3: Process each taxpayer
    for (let tp of taxpayers) {
        if (!tp || typeof tp.name !== "string" || typeof tp.income !== "number" || tp.income <= 0)
            return "Invalid Input";
        if (namesSet.has(tp.name)) return "Invalid Input";
        namesSet.add(tp.name);

        // Rule 4: Calculate tax based on brackets
        let tax = 0;
        if (tp.income <= 50000) tax = tp.income * 0.1;
        else if (tp.income <= 100000) tax = tp.income * 0.2;
        else tax = tp.income * 0.3;

        taxes[tp.name] = tax;
        totalTax += tax;

        // Rule 5: Track highest taxpayer
        if (tax > highestTaxpayer.tax) {
            highestTaxpayer = { name: tp.name, tax };
        }
    }

    // Rule 6: Return result
    return { taxes, totalTax, highestTaxpayer };
}

// Example Usage:
console.log(taxSummary([
    { name: "Ahsan", income: 50000 },
    { name: "Karim", income: 75000 },
    { name: "Rahim", income: 120000 }
]));