function warehouseAllocator(warehouses, packages) {
    // --- Input Validation ---
    if (!Array.isArray(warehouses) || !Array.isArray(packages)) return "Invalid Input";

    const warehouseNames = new Set();
    for (const w of warehouses) {
        if (!w.name || typeof w.name !== "string" || typeof w.capacity !== "number") return "Invalid Input";
        if (warehouseNames.has(w.name)) return "Invalid Input"; // no duplicate warehouse names
        warehouseNames.add(w.name);
    }

    const packageIds = new Set();
    for (const p of packages) {
        if (typeof p.id !== "number" || typeof p.size !== "number" || typeof p.priority !== "number") return "Invalid Input";
        if (packageIds.has(p.id)) return "Invalid Input"; // no duplicate package ids
        packageIds.add(p.id);
    }

    // --- Sort packages by priority descending (higher priority first) ---
    packages.sort((a, b) => b.priority - a.priority);

    const allocated = []; // packages successfully allocated
    const rejected = [];  // packages that could not be allocated

    // --- Allocate Packages ---
    for (const p of packages) {
        let assigned = false;
        for (const w of warehouses) {
            if (w.capacity >= p.size) {
                allocated.push({ packageId: p.id, warehouse: w.name }); // assign package
                w.capacity -= p.size; // reduce warehouse capacity
                assigned = true;
                break; // stop searching once allocated
            }
        }
        if (!assigned) rejected.push(p.id); // could not allocate
    }

    return { allocated, rejected };
}

// --- Example Usage ---
const warehouseResult = warehouseAllocator(
    [
        { name: "Warehouse A", capacity: 100 },
        { name: "Warehouse B", capacity: 50 },
    ],
    [
        { id: 1, size: 40, priority: 2 },
        { id: 2, size: 60, priority: 1 },
        { id: 3, size: 30, priority: 3 },
    ]
);

console.log(warehouseResult);