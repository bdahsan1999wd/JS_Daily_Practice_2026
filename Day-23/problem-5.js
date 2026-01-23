function examHallSeating(students, hallSize) {

    // --- Input validation ---
    if (!Array.isArray(students) || typeof hallSize !== "number" || hallSize <= 0) return "Invalid Input";

    const namesSet = new Set();
    for (const s of students) {
        if (!s.name || typeof s.name !== "string" || typeof s.skill !== "number") return "Invalid Input";
        if (namesSet.has(s.name)) return "Invalid Input"; // duplicate names not allowed
        namesSet.add(s.name);
    }

    if (students.length > hallSize) return "Not Possible";

    // --- Sort students by skill descending ---
    const sorted = [...students].sort((a, b) => b.skill - a.skill);

    const seating = new Array(students.length);

    let left = 0;
    let right = students.length - 1;

    // --- Alternate high and low placement ---
    for (let i = 0; i < sorted.length; i++) {
        if (i % 2 === 0) seating[left++] = sorted[i];  // place high skill at left
        else seating[right--] = sorted[i];             // place next high at right
    }

    // --- Convert seating to names ---
    const seatingNames = seating.map(s => s.name);

    // --- Final check for highest & lowest adjacency ---
    for (let i = 0; i < seating.length - 1; i++) {
        const skill1 = seating[i].skill;
        const skill2 = seating[i + 1].skill;
        const highest = sorted[0].skill;
        const lowest = sorted[sorted.length - 1].skill;

        if ((skill1 === highest && skill2 === lowest) || (skill1 === lowest && skill2 === highest)) {
            return "Not Possible"; // cannot seat highest & lowest together
        }
    }

    return { seating: seatingNames };
}

// --- Example ---
console.log(examHallSeating([
    { name: "A", skill: 90 },
    { name: "B", skill: 30 },
    { name: "C", skill: 80 },
    { name: "D", skill: 40 },
], 4));