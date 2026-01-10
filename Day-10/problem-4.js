function simulateTraffic(signals) {
    if (!Array.isArray(signals)) return "Invalid Input";

    let totalTime = 0;
    let greenTime = 0;
    let redTime = 0;

    for (let sig of signals) {
        if (sig && (sig.color === "green" || sig.color === "yellow" || sig.color === "red") && typeof sig.seconds === "number" && sig.seconds > 0) {
            totalTime += sig.seconds;
            if (sig.color === "green") greenTime += sig.seconds;
            else if (sig.color === "red") redTime += sig.seconds;
        }
    }

    return { totalTime, greenTime, redTime };
}

// Example Usage
console.log(simulateTraffic([
    { color: "green", seconds: 30 },
    { color: "yellow", seconds: 5 },
    { color: "red", seconds: 40 },
]));