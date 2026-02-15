/**
 * PROBLEM–04: 🏢 Building Security Clearance

 * Logic: Grants or denies access based on Role and Level (1-5).
 * - Admin: Needs level 1+
 * - Staff: Needs level 3+
 * - Visitor: Needs exactly level 5
 */

function verifyClearance(userRole, accessLevel) {

    // --- STEP 1: VALIDATION ---
    // Role must be specific strings. Level must be an integer 1 to 5.
    const allowedRoles = ["Admin", "Staff", "Visitor"];
    if (
        !allowedRoles.includes(userRole) ||
        !Number.isInteger(accessLevel) ||
        accessLevel < 1 || accessLevel > 5
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: ROLE-BASED ACCESS CONTROL (RBAC) ---
    if (userRole === "Admin") {
        // Admins are powerful; level 1 or higher is fine.
        return accessLevel >= 1;
    }
    else if (userRole === "Staff") {
        // Staff need at least level 3 clearance.
        return accessLevel >= 3;
    }
    else if (userRole === "Visitor") {
        // Visitors only get access to level 5 (public areas).
        return accessLevel === 5;
    }
}

// --- Example Usage ---
console.log(verifyClearance("Admin", 1));
console.log(verifyClearance("Staff", 2));
console.log(verifyClearance("Visitor", 5));
console.log(verifyClearance("Manager", 5));