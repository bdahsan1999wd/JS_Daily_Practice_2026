function hospitalTriageSystem(patients, doctors) {

    // --- Input Validation ---
    // Rule: Must be arrays
    if (!Array.isArray(patients) || !Array.isArray(doctors)) return "Invalid Input";

    const patientNames = new Set();
    const doctorNames = new Set();

    // Validate patients: each must have name (string), severity (number), arrivalTime (number)
    for (const p of patients) {
        if (!p.name || typeof p.name !== "string" || typeof p.severity !== "number" || typeof p.arrivalTime !== "number") return "Invalid Input";
        // Rule: No duplicate patient names
        if (patientNames.has(p.name)) return "Invalid Input";
        patientNames.add(p.name);
    }

    // Validate doctors: each must have name (string), availableAt (number)
    for (const d of doctors) {
        if (!d.name || typeof d.name !== "string" || typeof d.availableAt !== "number") return "Invalid Input";
        // Rule: No duplicate doctor names
        if (doctorNames.has(d.name)) return "Invalid Input";
        doctorNames.add(d.name);
    }

    // --- Sorting patients ---
    // Rule: Higher severity treated first; if same severity, earlier arrival first
    patients.sort((a, b) => b.severity - a.severity || a.arrivalTime - b.arrivalTime);

    // Track when each doctor is available
    const doctorAvailableAt = {};
    doctors.forEach(d => doctorAvailableAt[d.name] = d.availableAt);

    const treated = [];
    const waiting = [];

    // --- Assign patients to doctors ---
    for (const p of patients) {
        let earliestTime = Infinity;
        let assignedDoctor = null;

        for (const d of doctors) {
            // Rule: Doctor can treat only 1 patient at a time
            // Calculate when doctor can start with this patient
            const availableTime = Math.max(doctorAvailableAt[d.name], p.arrivalTime);
            if (availableTime < earliestTime) {
                earliestTime = availableTime;
                assignedDoctor = d.name;
            }
        }

        if (assignedDoctor !== null) {
            // Rule: Each treatment takes 1 hour
            treated.push({
                patient: p.name,
                doctor: assignedDoctor,
                startTime: earliestTime,
                endTime: earliestTime + 1
            });
            // Update doctor's next availability
            doctorAvailableAt[assignedDoctor] = earliestTime + 1;
        } else {
            // Rule: If no doctor free → patient waits
            waiting.push(p.name);
        }
    }

    return { treated, waiting };
}

// --- Example Usage ---
const triageResult = hospitalTriageSystem(
    [
        { name: "Ahsan", severity: 5, arrivalTime: 9 },
        { name: "Karim", severity: 3, arrivalTime: 10 },
        { name: "Rahim", severity: 5, arrivalTime: 10 },
    ],
    [
        { name: "Dr. Ali", availableAt: 9 },
        { name: "Dr. Sara", availableAt: 9 },
    ]
);

console.log(triageResult);