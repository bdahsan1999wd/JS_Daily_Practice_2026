function orderPerformanceAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalOrders = {};
    const sellerSet = new Set();
    const decliningSellers = [];
    const consistentSellers = [];
    let topSeller = "";
    let maxTotal = -1;

    // Rule 3: Process each seller
    for (let s of data) {

        // Rule 4: Validate structure
        if (!s || typeof s.seller !== "string" || !Array.isArray(s.orders) || s.orders.length === 0)
            return "Invalid Input";

        // Rule 5: Duplicate check
        if (sellerSet.has(s.seller)) return "Invalid Input";
        sellerSet.add(s.seller);

        // Rule 6: Validate orders & calculate
        let sum = 0;
        let min = Infinity;
        let max = -Infinity;

        for (let v of s.orders) {
            if (typeof v !== "number" || v < 0) return "Invalid Input";
            sum += v;
            if (v < min) min = v;
            if (v > max) max = v;
        }

        totalOrders[s.seller] = sum;

        // Rule 7: Track top seller
        if (sum > maxTotal) {
            maxTotal = sum;
            topSeller = s.seller;
        }

        // Rule 8: Declining & consistent check
        if (s.orders[s.orders.length - 1] < s.orders[0]) {
            decliningSellers.push(s.seller);
        }

        if (max - min < 10) {
            consistentSellers.push(s.seller);
        }
    }

    // Rule 9: Return result
    return { totalOrders, topSeller, decliningSellers, consistentSellers };
}


// Example Usage
console.log(orderPerformanceAnalyzer([
    { seller: "Seller A", orders: [10, 15, 20, 25, 30] },
    { seller: "Seller B", orders: [50, 45, 40, 42, 41] },
]));
