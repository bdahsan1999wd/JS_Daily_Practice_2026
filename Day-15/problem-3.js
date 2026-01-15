function seatAllocation(seats, participants) {
    // Rule 1: Validate input
    if (typeof seats !== "number" || !Array.isArray(participants)) return "Invalid Input";
    if (participants.length === 0 || seats < 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const assigned = [];
    const waiting = [];
    const namesSet = new Set();

    // Rule 3: Validate participants
    for (let p of participants) {
        if (!p || typeof p.name !== "string" || p.name.trim() === "") return "Invalid Input";
        if (namesSet.has(p.name)) return "Invalid Input";
        namesSet.add(p.name);
    }

    // Rule 4: Assign seats sequentially
    for (let i = 0; i < participants.length; i++) {
        if (i < seats) assigned.push(participants[i].name);
        else waiting.push(participants[i].name);
    }

    // Rule 5: Return result
    return { assigned, waiting, remainingSeats: Math.max(seats - assigned.length, 0) };
}

// Example Usage:
console.log(seatAllocation(3, [
    { name: "Ahsan" },
    { name: "Karim" },
    { name: "Rahim" },
    { name: "Salim" }
]));