// Exercise

// Create two objects:
// - The first has properties n1 and n2, with one string value and one number value
// - The second has properties named with the values of the first object, and each one 
// has as values, the corresponding name

let o1 = {
    n1: 123,
    n2: "Benfica"
}

let o2 = {
    '123': 'n1',
    Benfica: 'n2'
}

let o3 = {
    [o1.n1]: 'n1',
    [o1.n2]: 'n2',

}
// o3[o1.n1] = 'n1'
// o3[o1.n2] = 'n2'

console.log(o3)

let o4 = {}

for(let n in o1) {
    o4[o1[n]] = n 
}

console.log(o4)

