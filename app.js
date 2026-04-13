function login(user, password) {
    if (user === "admin" && password === "123") {
        console.log("Login successful")
        return true
    } else {
        console.log("Invalid credentials")
        return false
    }
}

login("admin", "123")