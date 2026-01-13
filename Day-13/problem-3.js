function lendBooks(stock, requests) {
    // Rule 1: Validate input
    if (typeof stock !== "object" || stock === null || !Array.isArray(requests)) {
        return "Invalid Input";
    }

    // Rule 2: Initialize result containers
    let lent = [];
    let rejected = [];

    // Rule 3: Make a copy of stock (so original is not mutated accidentally)
    let remainingStock = { ...stock };

    // Rule 4: Process requests sequentially
    for (let req of requests) {
        // Rule 5: Validate request
        if (req && typeof req.user === "string" && typeof req.book === "string") {
            // Rule 6: Check if book exists and stock > 0
            if (
                remainingStock.hasOwnProperty(req.book) &&
                remainingStock[req.book] > 0
            ) {
                // Rule 7: Lend book
                lent.push(req.user);
                remainingStock[req.book]--;
            } else {
                // Rule 8: Reject request
                rejected.push(req.user);
            }
        }
        // Rule 9: Ignore invalid request
    }

    // Rule 10: Return result object
    return {
        lent: lent,
        rejected: rejected,
        remainingStock: remainingStock
    };
}

// Example Usage:
console.log(lendBooks(
    { js: 2, python: 1 },
    [
        { user: "Ahsan", book: "js" },
        { user: "Karim", book: "python" },
        { user: "Rahim", book: "python" }
    ]
));

// Invalid Input Example:
console.log(lendBooks(null, []));