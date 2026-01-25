function topSellingProducts(orders, k) {
    
    // Step 1: Validate input
    if (!Array.isArray(orders) || typeof k !== "number" || k <= 0) return "Invalid Input";
    for (let o of orders) if (typeof o !== "number") return "Invalid Input";

    // Step 2: Count frequency of each product using Map
    let freqMap = new Map();
    for (let o of orders) {
        freqMap.set(o, (freqMap.get(o) || 0) + 1);
    }

    // Step 3: Validate k against unique products
    if (k > freqMap.size) return "Invalid Input";

    // Step 4: Sort products by frequency descending
    let sorted = Array.from(freqMap.entries())
        .sort((a, b) => b[1] - a[1]) // sort by frequency
        .slice(0, k) // take top K
        .map(x => x[0]); // extract product IDs

    return sorted;
}

// Example Usage
console.log(topSellingProducts([1, 2, 3, 1, 2, 1, 4, 3, 3, 3], 2));