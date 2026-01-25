function minRoomsRequired(bookings) {
    
    // Step 1: Validate input
    if (!Array.isArray(bookings)) return "Invalid Input";
    if (bookings.length === 0) return 0;
    for (let b of bookings) {
        if (!Array.isArray(b) || b.length !== 2) return "Invalid Input";
        if (typeof b[0] !== "number" || typeof b[1] !== "number") return "Invalid Input";
        if (b[0] >= b[1]) return "Invalid Input";
    }

    // Step 2: Separate start and end times and sort them
    let starts = bookings.map(b => b[0]).sort((a, b) => a - b);
    let ends = bookings.map(b => b[1]).sort((a, b) => a - b);

    // Step 3: Initialize variables
    let rooms = 0, endPtr = 0;

    // Step 4: Iterate through all meetings
    for (let i = 0; i < bookings.length; i++) {
        // If meeting starts after earliest ending meeting, a room is freed
        if (starts[i] >= ends[endPtr]) {
            endPtr++;
        } else {
            // Otherwise, need an extra room
            rooms++;
        }
    }

    return rooms;
}

// Example Usage
console.log(minRoomsRequired([[1, 3], [2, 5], [4, 6], [5, 8]]));