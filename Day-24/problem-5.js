function taskScheduler(tasks, n) {

    // Input validation
    if (!Array.isArray(tasks) || typeof n !== "number" || n < 0) return "Invalid Input";
    for (let t of tasks) if (typeof t !== "string") return "Invalid Input";

    // Count frequency of each task
    const freq = new Map();
    for (let t of tasks) freq.set(t, (freq.get(t) || 0) + 1);

    // Convert frequency map to array and sort descending
    const counts = [...freq.values()].sort((a, b) => b - a);

    let maxFreq = counts[0]; // Task with maximum frequency
    let maxCount = counts.filter(c => c === maxFreq).length; // How many tasks have max frequency

    // Formula for minimum time:
    // (maxFreq - 1) groups of (n+1) + number of tasks with max frequency
    const total = Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);

    return total;
}

// Example
console.log(taskScheduler(["A", "A", "A", "B", "B", "B"], 2));