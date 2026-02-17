/**
 * 🤝 PROBLEM–04: inviteToMeeting()

 * Logic: Checks specific role/experience combinations for VIP status.
 */

function inviteToMeeting(partyRole, yearsInPolitics) {

    // --- STEP 1: VALIDATION ---
    if (typeof partyRole !== 'string' || typeof yearsInPolitics !== 'number' || yearsInPolitics < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: ROLE-BASED INVITATION LOGIC ---
    if (partyRole === "Chairman" && yearsInPolitics > 10) {
        return "VIP Invite";
    }
    else if (partyRole === "Member" && yearsInPolitics > 5) {
        return "General Invite";
    }
    // If the role isn't Chairman/Member OR experience is too low
    else {
        return "Reject";
    }
}

// --- EXAMPLE USAGE ---
console.log(inviteToMeeting("Chairman", 12));
console.log(inviteToMeeting("Member", 2));
console.log(inviteToMeeting("Leader", 15));