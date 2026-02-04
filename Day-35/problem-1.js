/*
=> PROBLEM–01: 🕵️ Smart Password Strength Validator

=> Logic: Security override priority. Blacklisted words like "admin" or "123" force a "Weak" status preventing a "Strong" result even if other conditions are met.

 */

function passwordValidator(password) {
    // --- STEP 1: INPUT VALIDATION ---
    // Ensure the input is a string and not just whitespace
    if (typeof password !== 'string' || password.trim() === "") {
        return "Invalid Input";
    }

    const hasUpper = /[A-Z]/.test(password); // Checks for at least one uppercase letter
    const hasNumber = /[0-9]/.test(password); // Checks for at least one numerical digit
    // Checks if the password contains specific forbidden substrings
    const hasForbidden = password.includes("123") || password.includes("admin");

    // --- STEP 2: EVALUATION LOGIC ---

    // Rule 1: Weak check (Priority)
    // If forbidden words are present, it cannot be "Strong"
    if (password.length >= 8 && hasNumber && hasForbidden) {
        return { strength: "Weak", score: 30 };
    }

    // Rule 2: Strong check
    // Requires minimum length, uppercase, number, AND no forbidden words
    if (password.length >= 8 && hasUpper && hasNumber && !hasForbidden) {
        return { strength: "Strong", score: 100 };
    }

    // Rule 3: Default/Action Required
    // For passwords that are too short or missing required character types
    return { strength: "Action Required", score: 0 };
}

// --- EXAMPLE USAGE ---
console.log(passwordValidator("SecurePass99"));
console.log(passwordValidator("admin_Pass7"));