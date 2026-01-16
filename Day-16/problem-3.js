function packageExpiryMonitor(items) {

    // Rule 1: Validate input
    if (!Array.isArray(items)) return "Invalid Input";

    // Rule 2: Initialize containers
    const expired = [];
    const expiringSoon = [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Rule 3: Process each item
    for (let it of items) {
        // Rule 4: Validate item (STRICT)
        if (
            !it ||
            typeof it.product !== "string" ||
            typeof it.expiry !== "string" ||
            it.expiry.length !== 10
        ) return "Invalid Input";

        const d = new Date(it.expiry);
        if (isNaN(d.getTime())) return "Invalid Input";

        d.setHours(0, 0, 0, 0);

        const diffDays = Math.floor((d - today) / (1000 * 60 * 60 * 24));

        // Rule 5: Check expired
        if (d < today) {
            expired.push(it.product);
        }
        // Rule 6: Check expiring soon
        else if (diffDays >= 0 && diffDays <= 7) {
            expiringSoon.push(it.product);
        }
    }

    // Rule 7: Return result
    return {
        expired,
        expiringSoon,
        totalProducts: items.length
    };
}

// Example Usage:
console.log(packageExpiryMonitor([
    { product: "Milk", expiry: "2026-01-20" },
    { product: "Cheese", expiry: "2026-01-10" },
]));