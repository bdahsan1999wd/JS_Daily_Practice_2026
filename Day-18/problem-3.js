function hospitalLoadAnalyzer(data) {

    // Rule 1: Validate input
    if (!Array.isArray(data) || data.length === 0) return "Invalid Input";

    // Rule 2: Initialize containers
    const totalPatients = {};
    const hospitalSet = new Set();
    const criticalHospitals = [];
    const growingHospitals = [];
    let mostBusy = "";
    let maxTotal = -1;

    // Rule 3: Process each hospital
    for (let h of data) {

        // Rule 4: Validate structure
        if (!h || typeof h.hospital !== "string" || !Array.isArray(h.patients) || h.patients.length === 0)
            return "Invalid Input";

        // Rule 5: Duplicate check
        if (hospitalSet.has(h.hospital)) return "Invalid Input";
        hospitalSet.add(h.hospital);

        // Rule 6: Validate patients & sum
        let sum = 0;
        for (let v of h.patients) {
            if (typeof v !== "number" || v < 0) return "Invalid Input";
            sum += v;
        }

        totalPatients[h.hospital] = sum;

        // Rule 7: Track most busy
        if (sum > maxTotal) {
            maxTotal = sum;
            mostBusy = h.hospital;
        }

        // Rule 8: Critical & growing check
        const avg = sum / h.patients.length;
        if (avg > 150) criticalHospitals.push(h.hospital);

        if (h.patients[h.patients.length - 1] > h.patients[0]) {
            growingHospitals.push(h.hospital);
        }
    }

    // Rule 9: Return result
    return { totalPatients, mostBusy, criticalHospitals, growingHospitals };
}


// Example Usage
console.log(hospitalLoadAnalyzer([
    { hospital: "City Care", patients: [120, 130, 140, 160, 170] },
    { hospital: "Green Life", patients: [60, 70, 65, 80, 75] },
]));
