function login(user, password) {
    if(user == "admin" && password == "123456") {
        console.log("Login successful")
    }
}

function calculate(a, b) {
    var result = a + b
    return result
}

function unusedFunction() {
    var x = 10
}

var data = "Hello"
if(data == "Hello"){
    console.log("Hi")
}

eval("console.log('Dangerous code execution')")