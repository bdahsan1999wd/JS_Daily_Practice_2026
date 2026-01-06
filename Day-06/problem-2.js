function getNamesAboveAge(people) {
    // Rule 1: Check if input is an array
    if (!Array.isArray(people)) return "Invalid Input";

    const result = [];

    // Loop through people array
    for (let person of people) {
        // Rule 2 & 3: Check valid object and age >= 18
        if (
            person &&
            typeof person.name === "string" &&
            typeof person.age === "number" &&
            person.age >= 18
        ) {
            result.push(person.name); // Rule 4: Add valid person's name
        }
    }

    // Rule 5: If none found, result will be empty array
    return result;
}

// Example Usage
console.log(getNamesAboveAge([
    { name: "Ahsan", age: 22 },
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 25 },
]));

console.log(getNamesAboveAge("people"));