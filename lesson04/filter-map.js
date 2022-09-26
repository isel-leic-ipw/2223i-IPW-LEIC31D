function filter(a, predicate) {
    let ret = []
    for (let index = 0; index < array.length; index++) {
        if(predicate(a[index])) {
            ret.push(a[index])
        }
    }
    return ret
}





function repeat(amount, task) {
    for(let i = 0; i < amount; ++i) {
        task(i+1)
    }    
} 




// function filter(a, predicate) {
//     let result = []
//     repeat(a.length, testCurrentValue)

//     return result

//     function testCurrentValue(position) {
//         let currValue = a[position-1]
//         if(predicate(currValue, position-1, a)) {
//             result.push(currValue)
//         }
//     }
// }

function filter(a, predicate) {
    for(let i = 0; i < a.length; ++i) {
        if(predicate(a[i])) {
            res[res.length] = a[i]
        }
    }
}

let a = [1,2,3,4,10, 12, 15, 7, 9.4, 14, 9.5, 12]

let res = []
for(let i = 0; i < a.length; ++i) {
    if(a[i] >= 9,5) {
        res[res.length] = a[i]
    }
}


console.log("PositiveGrades")
let positiveGrades = filter(a, e => e >= 9.5 )
console.log(positiveGrades)


console.log("Even numbers")
let evenNumbers = filter(a, e => e % 2 == 0)

console.log(evenNumbers)


function map(a, prejection) {
    let ret = []
    for (let index = 0; index < array.length; index++) {
        ret.push(prejection(a[index]))
    }
    return ret

}


console.log("Square Numbers")
let squareNumbers = map(a, e => e*e)
console.log(squareNumbers)



let res1 = map(filter(students, s => s.number > 40000 && s.number < 45000), s => s.number)
let res2 = students.filter(s => s.number > 40000 && s.number < 45000)
                   .map(s => s.number)
