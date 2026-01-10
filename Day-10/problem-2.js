function validateSeatBookings(totalSeats, bookings) {
    if (typeof totalSeats !== "number" || !Array.isArray(bookings)) return "Invalid Input";

    const accepted = [];
    const rejected = [];
    let remainingSeats = totalSeats;

    for (let booking of bookings) {
        if (booking && typeof booking.user === "string" && typeof booking.seats === "number" && booking.seats > 0) {
            if (booking.seats <= remainingSeats) {
                accepted.push(booking.user);
                remainingSeats -= booking.seats;
            } else {
                rejected.push(booking.user);
            }
        }
    }

    return { accepted, rejected, remainingSeats };
}

// Example Usage
console.log(validateSeatBookings(5, [
    { user: "Ahsan", seats: 2 },
    { user: "Karim", seats: 3 },
    { user: "Rahim", seats: 1 },
]));