function minExecutionTime(tasks, cooldown) {
    
    // Step 1: Validate input
    if (!Array.isArray(tasks) || typeof cooldown !== "number" || cooldown < 0) return "Invalid Input";
    for (let t of tasks) if (typeof t !== "string") return "Invalid Input";

    // Step 2: Count frequency of each task
    let freqMap = new Map();
    for (let t of tasks) freqMap.set(t, (freqMap.get(t) || 0) + 1);

    // Step 3: Find the task(s) with max frequency
    let maxFreq = Math.max(...freqMap.values()); // frequency of most frequent task
    let maxCount = Array.from(freqMap.values()).filter(f => f === maxFreq).length; // number of tasks with max frequency

    // Step 4: Compute minimum total time using formula
    // (maxFreq - 1) * (cooldown + 1) + maxCount ensures cooldown spacing
    let totalTime = Math.max(tasks.length, (maxFreq - 1) * (cooldown + 1) + maxCount);

    return totalTime;
}

// Example Usage
console.log(minExecutionTime(["A", "A", "A", "B", "B", "B"], 2));