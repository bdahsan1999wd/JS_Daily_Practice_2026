function simulateTraffic(signals) {

    // Rule 1: Validate input

    if (!Array.isArray(signals)) return "Invalid Input";

    // Initialize counters

    let totalTime = 0;

    let greenTime = 0;

    let redTime = 0;

    // Step 1: Process each traffic signal record

    for (let sig of signals) {

        // Rule 2: Validate each signal record

        if (

            sig &&

            (sig.color === "green" || sig.color === "yellow" || sig.color === "red") &&

            typeof sig.seconds === "number" &&

            sig.seconds > 0

        ) {

            // Step 3: Aggregate total time

            totalTime += sig.seconds;

            // Step 4: Aggregate green & red times

            if (sig.color === "green") greenTime += sig.seconds;

            else if (sig.color === "red") redTime += sig.seconds;

            // Yellow time is counted in totalTime but not in greenTime/redTime

        }

    }

    // Step 5: Return final aggregated object

    return { totalTime, greenTime, redTime };

}

// Example Usage

console.log(simulateTraffic([

    { color: "green", seconds: 30 },

    { color: "yellow", seconds: 5 },

    { color: "red", seconds: 40 },

]));