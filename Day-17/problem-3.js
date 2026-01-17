function internetUsageAuditor(users) {

    // Rule 1: Validate input
    if (!Array.isArray(users) || users.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalUsage = {};       // Total data usage per user
    const userSet = new Set();   // To check duplicate user names
    const heavyUsers = [];       // Users with avg usage > 8GB
    let highestUser = "";        // User with highest total usage
    let maxUsage = -1;

    // Rule 3: Process each user
    for (let u of users) {
        // Rule 4: Validate user object
        if (!u || typeof u.user !== "string" || !Array.isArray(u.usageGB)) return "Invalid Input";

        // Rule 5: Check duplicate users
        if (userSet.has(u.user)) return "Invalid Input";
        userSet.add(u.user);

        // Rule 6: Validate usage array and calculate total
        let sum = 0;
        for (let usage of u.usageGB) {
            if (typeof usage !== "number" || usage < 0) return "Invalid Input";
            sum += usage;
        }
        totalUsage[u.user] = sum;

        // Rule 7: Track heavy users
        const avg = u.usageGB.length ? sum / u.usageGB.length : 0;
        if (avg > 8) heavyUsers.push(u.user);

        // Rule 8: Track highest user
        if (sum > maxUsage) {
            maxUsage = sum;
            highestUser = u.user;
        }
    }

    // Rule 9: Return result
    return { totalUsage, highestUser, heavyUsers };
}


// Example Usage
console.log(internetUsageAuditor([
    { user: "Rahim", usageGB: [2.5, 3, 4] },
    { user: "Karim", usageGB: [10, 12, 9] },
]));