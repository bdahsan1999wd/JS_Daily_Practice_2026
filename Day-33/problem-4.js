// PROBLEM–04: 🔑 Smart Subscription Access Manager

// Goal: Assign access levels based on subscription time and payment health.

function subscriptionManager(daysLeft, isAutoRenewalOn, paymentFailed) {

    // --- STEP 1: VALIDATION ---
    // Ensure daysLeft is not negative and booleans are correctly typed.
    if (typeof daysLeft !== 'number' || daysLeft < 0 ||
        typeof isAutoRenewalOn !== 'boolean' ||
        typeof paymentFailed !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: DECIDE STATUS BASED ON PRIORITIES ---
    let access = "None";
    let status = "Expired";

    // Priority 1: If payment failed, the user goes to "Grace Period" regardless of days.
    if (paymentFailed) {
        access = "Limited";
        status = "Grace Period";
    }
    // Priority 2: If there are days left, user gets "Full" access.
    else if (daysLeft > 0) {
        access = "Full";
        status = "Active";
    }
    // Priority 3: If days are 0 but Auto-Renewal is ON, they are in "Renewing" phase.
    else if (daysLeft === 0 && isAutoRenewalOn) {
        access = "Full";
        status = "Renewing";
    }

    // --- STEP 3: OUTPUT OBJECT ---
    return {
        access: access,
        status: status
    };
}

// --- EXAMPLE USAGE ---
console.log(subscriptionManager(0, true, true));
console.log(subscriptionManager(10, true, false));