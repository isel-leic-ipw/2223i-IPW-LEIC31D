function add(a, b) {
    return a + b
}


function max(a, b) {
    return a > b ? a : b
}



function executor(f, a, b) {
    return f(a, b);
}

function aggregator(a, b, ...functs) {
    let ret = []
    for(let i = 0; i < functs.length; ++i) {
        ret[i] = functs[i](a, b)
    }
    return ret
}


aggregator(3, 4, max, add, add, max)
aggregator(5, 6, max, add, add, max)

let agg1 = aggregator(max, add, add, max)
agg1(2,3)
agg1(5,6)

function aggregator(...functs) {
    return function(a, b) {
        let ret = []
        for(let i = 0; i < functs.length; ++i) {
            ret[i] = functs[i](a, b)
        }
        return ret
    }
}


executor(add, 2, 3)
executor(max, 10, 20)

let agg = aggregator(add, max, add, (a, b) => a*b )
console.log(agg(2,3))     // [5, 3, 5, 6]
