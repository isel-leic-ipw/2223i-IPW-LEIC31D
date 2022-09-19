let name = "Gonçalo Ramos"
let number = 1234

let name1 = "Bah"
let number1 = 2345

console.log(name)
console.log(number)

console.log(name1)
console.log(number1)



var s1 = {
    name: "Gonçalo Ramos",
    number: 1234,
    address: {
        street: "Avenida a, Nº 3",
        postalCode: "1000-000",
        locality: "Lisboa"
    }
}

var s2 = {
    name: "Bah",
    number: null,
    address: {
        street: "Avenida b, Nº 4",
        postalCode: "1000-000",
        locality: "Lisboa"
    }
}


console.log("---------------------")

console.log(s1.name)
console.log(s1.number)
console.log(s1.address.street)

console.log(s2.name)
console.log(s2.number)


s1.Name = 34567
s1.address = "Benfica"
s1.age = 25

delete s2.name


console.log(s1.Name)
console.log(s1['Name'])



let o = { 
    firstName: 'Afonso',
    d : "O Maior", 
    e : 20, 
    g: { 
        a: "SLB", 
        b: 10, 
        ' nome $ esquisito': function() {} } 
}

let cebolas = 'a'

let b = o.g[cebolas]

o.a = 10
o.b = "slb"
o.f = function() {}
console.log(o.g[' nome $ esquisito'])

console.log(o)

delete o.b

console.log(o)

// Using dot notation
console.log(o.a)
// Using subscript notation
console.log(o['a'])

let a = 10

console.log(o[a])


let propName = getPropName()
o[propName]
o.propName

// o[' a$very&strange()name"for*an identifier'] = 0
// console.log(o)







