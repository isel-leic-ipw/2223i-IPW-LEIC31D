let a = [1,2,3,4,5]
a.a = "SLB"
a[100] = 100

let o = {'0': 1, '1': 2, '2': 3, '3': 4, '4': 5}


for(const elem of a) {
    console.log(elem)
}

console.log("---------------")

// for(const elem in a) {
//     //console.log('a[' + elem + '] = ' + a[elem])
//     console.log(`a[${elem}] = ${a[elem]}`)
// }

// console.log("---------------")

// for(const elem in o) {
//     //console.log('a[' + elem + '] = ' + a[elem])
//     console.log(`a[${elem}] = ${a[elem]}`)
// }