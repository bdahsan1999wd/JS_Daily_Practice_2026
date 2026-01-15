function attendanceTracker(events) {
    // Rule 1: Validate input
    if (!Array.isArray(events) || events.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const counts = {};
    let topEvent = { event: "", attendees: 0 };
    const eventNames = new Set();

    // Rule 3: Process each event
    for (let e of events) {
        // Rule 4: Validate event
        if (!e || typeof e.event !== "string" || !Array.isArray(e.attendees) || e.attendees.length === 0)
            return "Invalid Input";

        // Rule 5: Check duplicate event names
        if (eventNames.has(e.event)) return "Invalid Input";
        eventNames.add(e.event);

        let attendeeCount = 0;

        // Rule 6: Validate attendees
        for (let attendee of e.attendees) {
            if (typeof attendee !== "string") return "Invalid Input";
            attendeeCount++;
        }

        counts[e.event] = attendeeCount;

        // Rule 7: Track top event
        if (attendeeCount > topEvent.attendees) {
            topEvent = { event: e.event, attendees: attendeeCount };
        }
    }

    // Rule 8: Return result
    return { counts, topEvent };
}

// Example Usage:
console.log(attendanceTracker([
    { event: "Workshop", attendees: ["Ahsan", "Karim", "Rahim"] },
    { event: "Seminar", attendees: ["Salim"] }
]));