function smartHomeEnergy(rooms) {
    // Rule 1: Validate input
    if (!Array.isArray(rooms)) return "Invalid Input";

    // Rule 2: Initialize containers
    let roomTotals = {};
    let topDevice = { name: "", watts: -1 };

    // Rule 3: Process each room
    for (let room of rooms) {
        // Rule 4: Validate room
        if (room && typeof room.room === "string" && Array.isArray(room.devices)) {
            let totalWatts = 0;

            // Rule 5: Process devices in room
            for (let device of room.devices) {
                if (device && typeof device.name === "string" && typeof device.watts === "number") {
                    totalWatts += device.watts;

                    // Rule 6: Track top device
                    if (device.watts > topDevice.watts) {
                        topDevice = { name: device.name, watts: device.watts };
                    }
                }
            }

            roomTotals[room.room] = totalWatts;
        }
    }

    // Rule 7: Return result object
    return {
        rooms: roomTotals,
        topDevice: topDevice
    };
}

// Example Usage:
console.log(
    smartHomeEnergy([
        {
            room: "Living Room",
            devices: [
                { name: "TV", watts: 150 },
                { name: "AC", watts: 2000 }
            ]
        },
        {
            room: "Bedroom",
            devices: [
                { name: "Lamp", watts: 40 }
            ]
        }
    ])
);
