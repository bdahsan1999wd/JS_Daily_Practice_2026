function evaluateLoan(applicant, rules) {

    // -------------------------
    // Step 1: Input Validation
    // -------------------------
    // - applicant must be an object
    // - rules must be an array
    // - each rule must have: field, operator, value, rejectReason
    if (
        typeof applicant !== "object" ||
        applicant === null ||           // null is not a valid object
        !Array.isArray(rules) ||
        rules.some(
            (r) =>
                !r.field ||                 // field name missing
                !r.operator ||              // operator missing
                r.value === undefined ||    // value missing
                !r.rejectReason             // reject reason missing
        )
    ) {
        return "Invalid Input";
    }

    // -------------------------
    // Step 2: Initialize container for failed rules
    // -------------------------
    let failedReasons = [];

    // -------------------------
    // Step 3: Evaluate each rule
    // -------------------------
    for (let rule of rules) {
        // Get the applicant's value for this field
        let val = applicant[rule.field];
        let op = rule.operator;
        let target = rule.value;

        // Boolean flag to indicate if rule failed
        let failed = false;

        // -------------------------
        // Step 3a: Evaluate based on operator
        // -------------------------
        switch (op) {
            case ">":
                failed = !(val > target);   // if val <= target → failed
                break;
            case "<":
                failed = !(val < target);   // if val >= target → failed
                break;
            case ">=":
                failed = !(val >= target);  // if val < target → failed
                break;
            case "<=":
                failed = !(val <= target);  // if val > target → failed
                break;
            case "==":
                failed = !(val == target);  // if val != target → failed
                break;
            case "!=":
                failed = !(val != target);  // if val == target → failed
                break;
            default:
                // Invalid operator → treat as invalid input
                return "Invalid Input";
        }

        // -------------------------
        // Step 3b: If rule failed, add rejectReason to the array
        // -------------------------
        if (failed) {
            failedReasons.push(rule.rejectReason);
        }
    }

    // -------------------------
    // Step 4: Return final result
    // -------------------------
    // - approved: true if no failed reasons
    // - failedReasons: all rules that failed
    return {
        approved: failedReasons.length === 0,
        failedReasons,
    };
}

// -------------------------
// Example Usage
// -------------------------
console.log(
    evaluateLoan(
        {
            age: 22,
            salary: 20000,
            creditScore: 620,
            hasCriminalRecord: false,
            jobType: "private",
        },
        [
            { field: "age", operator: ">=", value: 25, rejectReason: "Under age" },
            { field: "creditScore", operator: ">=", value: 650, rejectReason: "Low credit score" },
        ]
    )
);