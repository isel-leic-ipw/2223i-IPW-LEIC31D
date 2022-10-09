

console.log("Begin my-module2")

let count = 0

export function add(a, b) {
    count++
    if(!(Number(a) && Number(b)))
        throw "Arguments a and b must be numbers"
    return a+b
}

export function times(a, b) {
    count++
    return a*b
}

export default function(foo) {
    count++
    console.log("Received " + foo)
}


export function showCount() {
    console.log('count is ' + count)
}

export function setCount(newCount) {
    count = newCount
    console.log('count is ' + count)
}

count = 33
console.log("End my-module2")
