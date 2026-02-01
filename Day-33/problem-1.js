// PROBLEM–01: 🛗 Smart Elevator Priority System

// Goal: Manage elevator movement based on floor levels and VIP status.

function elevatorController(currentFloor, targetFloor, isVIP) {

    // --- STEP 1: VALIDATION ---
    // Rule: Elevators can only go from floor 0 to 20.
    // We check if inputs are numbers and within this 0-20 range.
    // We also check if isVIP is strictly a true/false boolean.
    if (typeof currentFloor !== 'number' || currentFloor < 0 || currentFloor > 20 ||
        typeof targetFloor !== 'number' || targetFloor < 0 || targetFloor > 20 ||
        typeof isVIP !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE MOVEMENT DIRECTION ---
    // Initialize default values: Assume it stays still unless a condition is met.
    let direction = "Stationary";
    let move = true;

    // Logic: If target is higher than current, we go Up.
    if (targetFloor > currentFloor) {
        direction = "Up";
    }
    // Logic: If target is lower than current, we go Down.
    else if (targetFloor < currentFloor) {
        direction = "Down";
    }
    // Logic: If target and current are the same, no movement is needed.
    else {
        move = false;
    }

    // --- STEP 3: ASSIGN PRIORITY LEVEL ---
    // Rule: VIP requests take "High" priority, everyone else is "Normal".
    let priorityLevel = isVIP ? "High" : "Normal";

    // --- STEP 4: OUTPUT RESULTS ---
    return {
        direction: direction,
        move: move,
        priority: priorityLevel
    };
}

// --- EXAMPLE USAGE ---
console.log(elevatorController(5, 10, false));
console.log(elevatorController(12, 12, true));