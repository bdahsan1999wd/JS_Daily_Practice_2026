function subscriptionBillingEngine(users) {
    // --- Input Validation ---
    if (!Array.isArray(users)) return "Invalid Input";

    const userNames = new Set();

    // Validate each user object
    for (const u of users) {
        if (
            !u.name || typeof u.name !== "string" ||
            typeof u.plan !== "string" ||
            typeof u.active !== "boolean" ||
            typeof u.balance !== "number"
        ) return "Invalid Input";

        // Check for duplicate user names
        if (userNames.has(u.name)) return "Invalid Input";
        userNames.add(u.name);
    }

    // --- Initialize Result Arrays ---
    const billed = [];        // successfully billed users
    const deactivated = [];   // users deactivated due to insufficient balance

    // --- Billing Logic ---
    for (const u of users) {
        if (!u.active) continue;      // skip already inactive users

        if (u.balance >= 50) {        // user has enough balance
            billed.push(u.name);      // add to billed array
            u.balance -= 50;          // deduct plan cost
        } else {
            u.active = false;         // deactivate user
            deactivated.push(u.name); // add to deactivated array
        }
    }

    // --- Return Results ---
    return { billed, deactivated };
}

// --- Example Usage ---
const subscriptionResult = subscriptionBillingEngine([
    { name: "Ahsan", plan: "Gold", active: true, balance: 100 },
    { name: "Karim", plan: "Silver", active: true, balance: 20 },
]);

console.log(subscriptionResult);