function login(user, password) {
    if(user == "admin" && password == "123456") {
        console.log("Login successful")
    }

    eval("console.log('unsafe execution')")

    var x = 10
    var x = 20

    if(true) {
    }

    return x
}

function calculate(a, b) {
    var result = a + b
    return result
}

function unusedFunction() {
    var temp = 100
}

var data = "Hello"
if(data == "Hello"){
    console.log("Hi")
}

login("admin", "123456")