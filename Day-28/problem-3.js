function resolveLeaves(leaves) {

    // -------------------------
    // Step 1: Input Validation
    // -------------------------
    // - leaves must be an array
    // - each leave must satisfy from < to
    if (!Array.isArray(leaves) || leaves.some(l => l.from >= l.to)) {
        return "Invalid Input";
    }

    // -------------------------
    // Step 2: Sort leaves by priority descending
    // -------------------------
    // Higher priority leaves get approved first
    leaves.sort((a, b) => b.priority - a.priority);

    let approved = []; // approved employee IDs
    let rejected = []; // rejected employee IDs

    // Track concurrent leaves per day
    // Key = day number, Value = number of leaves approved for that day
    let dayMap = {};

    // -------------------------
    // Step 3: Process each leave
    // -------------------------
    for (let leave of leaves) {
        let conflict = false;

        // Check if any day in this leave period exceeds max 2 employees
        for (let d = leave.from; d < leave.to; d++) {
            if ((dayMap[d] || 0) >= 2) {
                conflict = true; // cannot approve this leave
                break;
            }
        }

        // -------------------------
        // Step 3a: Approve or Reject leave
        // -------------------------
        if (!conflict) {
            approved.push(leave.employeeId);
            // Mark these days as occupied
            for (let d = leave.from; d < leave.to; d++) {
                dayMap[d] = (dayMap[d] || 0) + 1;
            }
        } else {
            rejected.push(leave.employeeId);
        }
    }

    // -------------------------
    // Step 4: Return final result
    // -------------------------
    return { approved, rejected };
}

// -------------------------
// Example Usage
// -------------------------
console.log(
    resolveLeaves([
        { employeeId: "E1", from: 1, to: 5, priority: 1 },
        { employeeId: "E2", from: 2, to: 6, priority: 3 },
        { employeeId: "E3", from: 3, to: 4, priority: 2 },
    ])
);