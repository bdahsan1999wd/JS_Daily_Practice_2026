function minMeetingRooms(intervals) {

    // Input validation
    if (!Array.isArray(intervals)) return "Invalid Input"; // Must be array
    if (intervals.length === 0) return 0;                 // No meetings → 0 rooms

    for (let i = 0; i < intervals.length; i++) {
        if (!Array.isArray(intervals[i]) || intervals[i].length !== 2) return "Invalid Input"; // Each interval must be [start,end]
        if (typeof intervals[i][0] !== "number" || typeof intervals[i][1] !== "number") return "Invalid Input";
        if (intervals[i][0] >= intervals[i][1]) return "Invalid Input"; // start must be < end
    }

    // Separate start and end times and sort them
    let starts = intervals.map(i => i[0]).sort((a, b) => a - b);
    let ends = intervals.map(i => i[1]).sort((a, b) => a - b);

    let s = 0, e = 0;        // Pointers for start and end arrays
    let rooms = 0, maxRooms = 0;

    // Sweep line algorithm
    while (s < starts.length) {
        if (starts[s] < ends[e]) {
            rooms++;                     // New meeting starts → need a new room
            maxRooms = Math.max(maxRooms, rooms); // Keep track of max rooms needed
            s++;                         // Move to next meeting start
        }
        else {
            rooms--;                     // Meeting ended → free a room
            e++;                         // Move to next meeting end
        }
    }

    return maxRooms;
}

// Example
console.log(minMeetingRooms([[1, 4], [2, 5], [7, 9], [3, 6]]));