import  fetch  from 'node-fetch'


function processResponse(text) {
    console.log(text.length)

}

function peek(val) {
    console.log(`peeking value: ${val}`)
    return val
}

function responseToSizePromise(rspP) {
    return rspP.then(rsp => rsp.text()) // Promise<String>
        //.then(peek)
        .then(text => text.length)      // Promise<Number>
        //.then(peek)
}

function twoPromiseNumbersToOnePromiseNumberWithSum(pn1, pn2) {
    return pn1.then(v1 => pn2.then(v2 => v1 + v2))
}

function twoPromiseNumbersToOnePromiseNumberWithSum(p1, p2) {
    return twoPromiseNumbersToOnePromiseNumber(p1, p2, (n1, n2) => n1+n2)
}

// (Promise<T1>, Promise<T2>,  (T1, T2) -> T3) -> Promise<T3> 
function twoPromiseNumbersToOnePromiseNumber(p1, p2, combiner) {
    p1.then(n1 => p2.then(n2 => combiner(n1, n2)))
}




fetch('https://eloquentjavascript.net/11_async.html')   // Promise<Response>
    .then(rsp => rsp.text())                            // Promise<String>
    .then(text => text.length)                          // Promise<Number>
    .then(len => console.log(len))                      // Promise<undefined>


// Synchronous version: NOT POSSIBLE IN JAVASCRIPT. This is just an equivalent model
// const rsp = fetch('https://eloquentjavascript.net/11_async.html') // Response
// const text = rsp.text()                                           // String  
// const len = text.length                                           // Number  
// console.log(len)                                                  // undefined  

const p1 = fetch('https://eloquentjavascript.net/11_async.html')
    .then(rsp => rsp.text())                            // Promise<String>
    .then(text => text.length)                          // Promise<Number>
    

const p2 = fetch('https://eloquentjavascript.net/11_async.html')
    .then(rsp => rsp.text())                            // Promise<String>
    .then(text => text.length)                          // Promise<Number>

p1.then(len1 => p2.then(len2 => len2))
p1.then(processLen)     // Promise<Promise<Number>>  <=> Promise<Number>
   .then(sum => console.log(sum))


function processLen(len1) {
    return p2.then(function (len2) {
      return len2  + len1   // Number
    })      // Promise<Number>
}   // Promise<Number>






console.log('Nothing more to do')