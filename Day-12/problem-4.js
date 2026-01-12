function applyCoupons(price, requests) {

    // Rule 1: Validate input
    if (typeof price !== "number" || !Array.isArray(requests)) {
        return "Invalid Input";
    }

    // Step 1: Initialize result containers
    const applied = [];
    const invalid = [];
    const finalPrices = {};

    // Step 2: Process each coupon request
    for (let req of requests) {

        // Rule 2: Validate request
        if (req && typeof req.user === "string" && typeof req.coupon === "string") {

            // Rule 3: Apply coupon rules
            if (req.coupon === "DISC10") {
                applied.push(req.user);
                finalPrices[req.user] = price * 0.9;
            }
            else if (req.coupon === "DISC20") {
                applied.push(req.user);
                finalPrices[req.user] = price * 0.8;
            }
            else {
                invalid.push(req.user);
            }
        }
    }

    // Step 3: Return final result
    return {
        applied,
        invalid,
        finalPrices
    };
}

// Example Usage
console.log(applyCoupons(1000, [
    { user: "Ahsan", coupon: "DISC10" },
    { user: "Karim", coupon: "DISC20" },
    { user: "Rahim", coupon: "ABC" },
]));