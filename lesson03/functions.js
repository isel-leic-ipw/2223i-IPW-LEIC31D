let sayHello = function () {
    console.log("SLB")
}

sayHello.a = "Benfica"
sayHello.sayAgain = function() {
    console.log("Another SLB")
}
sayHello.o = {
    f: function() {}
}

let ret = sayHello()

console.log(ret)
sayHello()
sayHello.sayAgain()



// Function with return value
function getHello() {
    return "Glorioso"
}

console.log(getHello)
console.log(getHello())

let f1 = getHello
console.log(f1())


// Functions with arguments

function times(a, b) {
    return a*b
}


console.log(times(2,3))
console.log(times(2,"SLB"))
console.log(times(2))
console.log(times())
console.log(times(3,2,3,4,5))


function multiplier(b) {
    return function(a) {
        return times(a, b)
    }
}

console.log(times(1,9))
console.log(times(2,9))
console.log(times(3,9))
console.log(times(4,9))
console.log(times(5,9))
console.log(times(6,9))
console.log(times(7,9))
console.log(times(8,9))
console.log(times(9,9))

let nineMult = multiplier(9)
console.log(nineMult(1,9))
console.log(nineMult(1,9))
console.log(nineMult(2,9))
console.log(nineMult(3,9))
console.log(nineMult(4,9))
console.log(nineMult(5,9))
console.log(nineMult(6,9))
console.log(nineMult(7,9))
console.log(nineMult(8,9))
console.log(nineMult(9,9))
