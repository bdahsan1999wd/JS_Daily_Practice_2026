function stadiumSeatManager(seats, bookings) {

    // --- Input validation ---
    // Check if 'seats' is a positive number and 'bookings' is an array
    if (typeof seats !== "number" || seats <= 0 || !Array.isArray(bookings)) return "Invalid Input";

    const namesSet = new Set(); // to track duplicate booking names

    for (const b of bookings) {
        // Validate each booking: must have a string 'name' and a positive number 'seats'
        if (!b.name || typeof b.name !== "string" || typeof b.seats !== "number" || b.seats <= 0)
            return "Invalid Input";

        if (namesSet.has(b.name)) return "Invalid Input"; // reject duplicate booking names
        namesSet.add(b.name); // add name to set
    }

    // --- Initialize seat row ---
    const seatRow = new Array(seats).fill(null); // represents seats: null = empty
    const allocations = {}; // store allocated seat numbers for each booking
    const rejected = [];    // store names of rejected bookings

    // --- Helper to find continuous empty seats ---
    function findBlock(size) {
        let start = -1, length = 0;
        for (let i = 0; i < seatRow.length; i++) {
            if (seatRow[i] === null) { // seat is empty
                if (start === -1) start = i; // start of potential block
                length++; // increase block length
                if (length === size) return start; // found enough continuous seats
            } else {
                start = -1; // reset block
                length = 0;
            }
        }
        return -1; // no block found
    }

    // --- Helper to try shifting bookings ---
    function tryShift(size) {
        // Attempt to shift previous allocations to make room
        const tempRow = seatRow.slice(); // copy current seat row
        const bookingOrder = Object.keys(allocations); // order of previous bookings
        for (let shift = 1; shift <= seats; shift++) { // try shifting by 1,2,... seats
            const newRow = new Array(seats).fill(null); // new temporary row
            let possible = true; // flag to check if shift is possible
            for (const name of bookingOrder) {
                const oldSeats = allocations[name]; // previous seat positions
                const newStart = oldSeats[0] - 1 - shift; // try to shift left
                if (newStart < 0) { // cannot shift beyond start
                    possible = false;
                    break;
                }
                for (let i = newStart; i < newStart + oldSeats.length; i++) {
                    if (newRow[i] !== null) possible = false; // collision with another booking
                    newRow[i] = name; // assign shifted seats
                }
            }
            if (possible) {
                // Shift successful: update main seat row
                for (let i = 0; i < seats; i++) seatRow[i] = newRow[i];
                // Recompute allocations for all shifted bookings
                for (const name of bookingOrder) {
                    allocations[name] = [];
                    for (let i = 0; i < seats; i++) {
                        if (seatRow[i] === name) allocations[name].push(i + 1);
                    }
                }
                return findBlock(size); // return starting index of new free block
            }
        }
        return -1; // shifting failed
    }

    // --- Allocate bookings ---
    for (const b of bookings) {
        let start = findBlock(b.seats); // try to find free block
        if (start === -1) start = tryShift(b.seats); // if not found, try shifting

        if (start === -1) {
            rejected.push(b.name); // cannot allocate even after shifting
            continue;
        }

        allocations[b.name] = []; // allocate seats
        for (let i = start; i < start + b.seats; i++) {
            seatRow[i] = b.name; // mark seat as taken
            allocations[b.name].push(i + 1); // store seat numbers (1-indexed)
        }
    }

    return { allocations, rejected }; // final result
}

// --- Example ---
console.log(stadiumSeatManager(10, [
    { name: "A", seats: 3 },
    { name: "B", seats: 4 },
    { name: "C", seats: 3 }
]));