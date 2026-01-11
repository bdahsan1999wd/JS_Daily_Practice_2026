function bookHotelRooms(totalRooms, requests) {

    // Rule 1: Validate input
    if (typeof totalRooms !== "number" || !Array.isArray(requests)) {
        return "Invalid Input";
    }

    // Step 1: Initialize result containers
    const booked = [];
    const rejected = [];
    let remainingRooms = totalRooms;

    // Step 2: Process each request
    for (let req of requests) {

        // Rule 2: Validate request
        if (
            req &&
            typeof req.name === "string" &&
            typeof req.rooms === "number" &&
            req.rooms > 0
        ) {
            if (req.rooms <= remainingRooms) {
                booked.push(req.name);
                remainingRooms -= req.rooms;
            } else {
                rejected.push(req.name);
            }
        }
    }

    // Step 3: Return final result
    return { booked, rejected, remainingRooms };
}

// Example Usage
console.log(bookHotelRooms(3, [
    { name: "Ahsan", rooms: 1 },
    { name: "Karim", rooms: 2 },
    { name: "Rahim", rooms: 1 },
]));