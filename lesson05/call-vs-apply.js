function add(x, y) {
    return this.a+x + this.b+y
}

console.assert(isNaN(add(2,3)))

let o = {
    a: 5, 
    b: 6
}

console.assert(add.call(o, 2, 3) === 16, 1)
o.xpto = add
console.assert(o.xpto(2,3) === 16, 1)

console.assert(add.apply(o, [2,3]) == 16, 3)
console.assert(add.call(o, [2,3]) == "52,36undefined", 4)



