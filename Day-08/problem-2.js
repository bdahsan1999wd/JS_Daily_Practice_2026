function groupUsersByAgeRange(users) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(users)) return "Invalid Input";

    let result = {
        child: [],
        adult: [],
        senior: []
    };

    // Loop through each user
    for (let user of users) {
        // Rule 2: Only consider users whose age is a number
        if (user && typeof user.age === "number") {
            // Rule 3: Group by age range
            if (user.age < 18) {
                result.child.push(user);
            } else if (user.age >= 18 && user.age <= 59) {
                result.adult.push(user);
            } else {
                result.senior.push(user);
            }
        }
        // Rule 4: Ignore invalid users
    }

    // Rule 5 & 6: If none valid, arrays will be empty
    return result;
}

// Example Usage
console.log(groupUsersByAgeRange([
    { name: "Ahsan", age: 23 },
    { name: "Karim", age: 17 },
    { name: "Rahim", age: 35 },
    { name: "Sabbir", age: 65 },
]));

console.log(groupUsersByAgeRange("users"));