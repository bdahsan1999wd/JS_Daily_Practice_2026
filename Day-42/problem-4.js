// 🧩 PROBLEM–04: 🛡️ Cyber-Security Vault Access

// Logic: Implements emergency-aware security gates that prioritize bio-verification during crises and dual-factor during normal operation.

function canAccessVault(isBioVerified, hasKeycard, isEmergencyMode) {

    // --- STEP 1: INPUT VALIDATION ---
    if (
        typeof isBioVerified !== 'boolean' ||
        typeof hasKeycard !== 'boolean' ||
        typeof isEmergencyMode !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: SECURITY ACCESS RULES ---

    // Rule 1: Prevent breach (Keycard used without Bio during emergency)
    if (isEmergencyMode === true && isBioVerified === false && hasKeycard === true) {
        return false;
    }

    // Rule 2: Emergency Access (Requires only Biometric check)
    if (isEmergencyMode === true && isBioVerified === true) {
        return true;
    }

    // Rule 3: Normal Mode (Requires both factors)
    if (isEmergencyMode === false && isBioVerified === true && hasKeycard === true) {
        return true;
    }

    // Default: Reject access
    return false;
}

// --- EXAMPLE USAGE ---
console.log(canAccessVault(true, false, true));
console.log(canAccessVault(false, true, true));
console.log(canAccessVault(true, true, false));