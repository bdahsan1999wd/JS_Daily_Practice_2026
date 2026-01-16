function meetingRoomScheduler(rooms) {

    // Rule 1: Validate input
    if (!Array.isArray(rooms) || rooms.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalBookedHours = {};
    const fullyBooked = [];
    let mostFreeRoom = "";
    let maxFree = -1;
    const roomNames = new Set();

    // Rule 3: Process each room
    for (let r of rooms) {
        // Rule 4: Validate room object
        if (!r || typeof r.room !== "string" || !Array.isArray(r.meetings)) return "Invalid Input";

        // Rule 5: Check duplicate room names
        if (roomNames.has(r.room)) return "Invalid Input";
        roomNames.add(r.room);

        // Rule 6: Validate meetings
        for (let m of r.meetings) {
            if (!m || typeof m.start !== "number" || typeof m.end !== "number") return "Invalid Input";
            if (m.start < 0 || m.end > 24 || m.start >= m.end) return "Invalid Input";
        }

        // Rule 7: Check overlapping meetings
        const sorted = [...r.meetings].sort((a, b) => a.start - b.start);
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i].start < sorted[i - 1].end) return "Invalid Input";
        }

        // Rule 8: Calculate booked hours
        let booked = 0;
        for (let m of r.meetings) {
            booked += (m.end - m.start);
        }

        totalBookedHours[r.room] = booked;

        // Rule 9: Check fully booked
        if (booked === 24) fullyBooked.push(r.room);

        // Rule 10: Track most free room
        let free = 24 - booked;
        if (free > maxFree) {
            maxFree = free;
            mostFreeRoom = r.room;
        }
    }

    // Rule 11: Return result
    return { totalBookedHours, fullyBooked, mostFreeRoom };
}

// Example Usage:
console.log(meetingRoomScheduler([
    {
        room: "Ocean View",
        meetings: [
            { start: 9, end: 11 },
            { start: 14, end: 16 },
        ],
    },
    {
        room: "Skyline",
        meetings: [
            { start: 10, end: 12 },
            { start: 13, end: 15 },
        ],
    },
]));
