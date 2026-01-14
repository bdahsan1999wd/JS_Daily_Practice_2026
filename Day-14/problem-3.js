function movieRatingsDashboard(movies) {
    // Rule 1: Validate input
    if (!Array.isArray(movies)) return "Invalid Input";

    // Rule 2: Initialize containers
    let avgRatings = {};
    let topMovie = "";
    let highestAvg = -1;
    let totalRatings = 0;

    // Rule 3: Process each movie
    for (let movie of movies) {
        // Rule 4: Validate movie
        if (
            movie &&
            typeof movie.movie === "string" &&
            Array.isArray(movie.ratings) &&
            movie.ratings.every(r => typeof r === "number")
        ) {
            let sum = movie.ratings.reduce((a, b) => a + b, 0);
            let avg = sum / movie.ratings.length;
            avgRatings[movie.movie] = avg;
            totalRatings += movie.ratings.length;

            // Rule 5: Track top movie
            if (avg > highestAvg) {
                highestAvg = avg;
                topMovie = movie.movie;
            }
        }
    }

    // Rule 6: Return result object
    return {
        topMovie: topMovie,
        avgRatings: avgRatings,
        totalRatings: totalRatings
    };
}

// Example Usage:
console.log(
    movieRatingsDashboard([
        {
            movie: "Inception",
            ratings: [9, 8, 10]
        },
        {
            movie: "Matrix",
            ratings: [10, 9]
        }
    ])
);