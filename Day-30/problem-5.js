function lightingOptimizer(rooms, occupancy, timeOfDay, powerLimit) {

    // ==========================
    // Step 1: Input Validation
    // ==========================
    if (
        !Array.isArray(rooms) || rooms.some(r => typeof r !== "string") || // rooms must be array of strings
        typeof occupancy !== "object" || occupancy === null ||             // occupancy must be a valid object
        !["day", "night"].includes(timeOfDay) ||                           // timeOfDay must be "day" or "night"
        typeof powerLimit !== "number" || powerLimit <= 0                  // powerLimit must be positive number
    ) {
        return "Invalid Input"; // reject invalid inputs
    }

    // ==========================
    // Step 2: Initialize Result Array
    // ==========================
    let result = [];

    // ==========================
    // Step 3: Determine Lights ON/OFF and Brightness per Room
    // ==========================
    rooms.forEach(room => {
        let people = occupancy[room] || 0;        // number of people in the room
        let lightsOn = people > 0;               // lights ON if at least 1 person
        let brightnessPercent = 0;               // default brightness

        if (lightsOn) {
            brightnessPercent = timeOfDay === "day" ? 50 : 100; // day → 50%, night → 100%
        }

        result.push({ room, lightsOn, brightnessPercent });
    });

    // ==========================
    // Step 4: Ensure Total Power Does Not Exceed Power Limit
    // Assume: each room uses brightnessPercent units of power
    // ==========================
    let totalPower = result.reduce((sum, r) => sum + r.brightnessPercent, 0);

    if (totalPower > powerLimit) {
        // Dim low-priority rooms first (rooms with < 2 people)
        result.sort((a, b) => {
            let aPeople = occupancy[a.room] || 0;
            let bPeople = occupancy[b.room] || 0;
            return aPeople - bPeople; // low occupancy first
        });

        for (let r of result) {
            if (totalPower <= powerLimit) break; // stop dimming once under limit
            let people = occupancy[r.room] || 0;
            if (r.brightnessPercent > 0 && people < 2) {
                // Dim by 50%
                totalPower -= r.brightnessPercent;
                r.brightnessPercent = Math.max(0, r.brightnessPercent / 2);
                totalPower += r.brightnessPercent;
            }
        }
    }

    // ==========================
    // Step 5: Return Result
    // ==========================
    return result;
}

// --- Example Usage ---
console.log(
    lightingOptimizer(
        ["Room1", "Room2", "Room3"],
        { Room1: 3, Room2: 1, Room3: 0 },
        "day",
        300
    )
);