function validateSeatBookings(totalSeats, bookings) {

    // Rule 1: Validate inputs

    if (typeof totalSeats !== "number" || !Array.isArray(bookings)) return "Invalid Input";

    // Step 1: Initialize results

    const accepted = [];

    const rejected = [];

    let remainingSeats = totalSeats;

    // Step 2: Process each booking sequentially

    for (let booking of bookings) {

        // Rule 2: Validate each booking

        if (

            booking &&

            typeof booking.user === "string" &&

            typeof booking.seats === "number" &&

            booking.seats > 0

        ) {

            // Step 2a: Check if enough seats are available

            if (booking.seats <= remainingSeats) {

                accepted.push(booking.user);

                remainingSeats -= booking.seats; // reduce available seats

            } else {

                rejected.push(booking.user); // not enough seats

            }

        } else {

            // Invalid booking → reject

            rejected.push(booking?.user || "Unknown");

        }

    }

    // Step 3: Return final result

    return {

        accepted,

        rejected,

        remainingSeats

    };

}

// Example Usage

console.log(validateSeatBookings(5, [

    { user: "Ahsan", seats: 2 },

    { user: "Karim", seats: 3 },

    { user: "Rahim", seats: 1 },

]));