/**
 * 📜 PROBLEM–02: isCabinetMember()

 * Handles array searching with case-insensitivity.
 */

function isCabinetMember(memberList, name) {
    
    // --- STEP 1: TYPE VALIDATION ---
    // Ensure non-empty array and a valid search string.
    if (!Array.isArray(memberList) || memberList.length === 0 || typeof name !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: PREPARE SEARCH CRITERIA ---
    const searchName = name.toLowerCase();

    // --- STEP 3: ARRAY SEARCHING ---
    // use .some() to find if any element matches our criteria.
    const exists = memberList.some(member =>
        typeof member === 'string' && member.toLowerCase() === searchName
    );

    return exists;
}

// --- EXAMPLE USAGE ---
console.log(isCabinetMember(["Karim", "Rahim", "Selina"], "karim"));
console.log(isCabinetMember(["Karim", "Rahim"], "John"));
console.log(isCabinetMember([], "Karim"));