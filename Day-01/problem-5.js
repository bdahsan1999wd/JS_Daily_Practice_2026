
function loginCheck(user) {

    // Verify that the input is an object
    if (typeof user !== 'object' || user === null) {
        return "Invalid Input";
    }

    // Check if the credentials match
    if (user.username === "admin" && user.password === "1234") {
        return "Login Successful";
    }

    return "Invalid Credentials";
}


console.log(loginCheck({ username: "admin", password: "1234" }));
console.log(loginCheck({ username: "admin", password: "wrong" }));
console.log(loginCheck({ username: "user", password: "1234" }));
console.log(loginCheck("not an object"));