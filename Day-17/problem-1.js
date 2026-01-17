function electionVoteAnalyzer(candidates) {

    // Rule 1: Validate input
    if (!Array.isArray(candidates) || candidates.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalVotes = {};       // Stores total votes per candidate
    const candidateSet = new Set(); // To check duplicate candidate names
    const lowPerformers = [];    // Candidates with average votes < 100
    let winner = "";             // Candidate with max votes
    let maxVotes = -1;

    // Rule 3: Process each candidate
    for (let c of candidates) {
        // Rule 4: Validate candidate object
        if (!c || typeof c.candidate !== "string" || !Array.isArray(c.votes)) return "Invalid Input";

        // Rule 5: Check duplicate candidate names
        if (candidateSet.has(c.candidate)) return "Invalid Input";
        candidateSet.add(c.candidate);

        // Rule 6: Validate votes array and calculate sum
        let sum = 0;
        for (let v of c.votes) {
            if (typeof v !== "number" || v < 0) return "Invalid Input";
            sum += v;
        }
        totalVotes[c.candidate] = sum;

        // Rule 7: Check for low performers
        const avg = c.votes.length ? sum / c.votes.length : 0;
        if (avg < 100) lowPerformers.push(c.candidate);

        // Rule 8: Track winner
        if (sum > maxVotes) {
            maxVotes = sum;
            winner = c.candidate;
        }
    }

    // Rule 9: Return final result
    return { totalVotes, winner, lowPerformers };
}


// Example Usage
console.log(electionVoteAnalyzer([
    { candidate: "Ahsan", votes: [120, 130, 140] },
    { candidate: "Babu", votes: [100, 90, 110] },
]));