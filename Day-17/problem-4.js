function screenTimeAnalyzer(users) {

    // Rule 1: Validate input
    if (!Array.isArray(users) || users.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalUsage = {};       // Total screen time per user
    const userSet = new Set();   // To check duplicate user names
    const heavyUsers = [];       // Users with avg daily usage > 4 hours
    let mostAddicted = "";       // User with max total screen time
    let maxUsage = -1;

    // Rule 3: Process each user
    for (let u of users) {
        // Rule 4: Validate user object
        if (!u || typeof u.user !== "string" || !Array.isArray(u.usageHours)) return "Invalid Input";

        // Rule 5: Check duplicate users
        if (userSet.has(u.user)) return "Invalid Input";
        userSet.add(u.user);

        // Rule 6: Validate usage array and calculate total
        let sum = 0;
        for (let h of u.usageHours) {
            if (typeof h !== "number" || h < 0) return "Invalid Input";
            sum += h;
        }
        totalUsage[u.user] = sum;

        // Rule 7: Track heavy users
        const avg = u.usageHours.length ? sum / u.usageHours.length : 0;
        if (avg > 4) heavyUsers.push(u.user);

        // Rule 8: Track most addicted user
        if (sum > maxUsage) {
            maxUsage = sum;
            mostAddicted = u.user;
        }
    }

    // Rule 9: Return result
    return { totalUsage, mostAddicted, heavyUsers };
}


// Example Usage
console.log(screenTimeAnalyzer([
    { user: "Ahsan", usageHours: [2, 3, 4, 1] },
    { user: "Karim", usageHours: [5, 6, 4, 5] },
]));