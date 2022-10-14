import  fetch  from 'node-fetch'


function processResponse(text) {
    console.log(text.length)

}


// fetch('https://eloquentjavascript.net/11_async.html')   // Promise<Response>
//     .then(rsp => rsp.text())                            // Promise<String>
//     .then(text => text.length)                          // Promise<Number>
//     .then(len => console.log(len))                      // Promise<undefined>


// Synchronous version: NOT POSSIBLE IN JAVASCRIPT. This is just an equivalent model
// const rsp = fetch('https://eloquentjavascript.net/11_async.html') // Response
// const text = rsp.text()                                           // String  
// const len = text.length                                           // Number  
// console.log(len)                                                  // undefined  

// Using async/await
// const rsp = await fetch('https://eloquentjavascript.net/11_async.html') // Response
// const text = await rsp.text()                                           // String  
// const len = text.length                                           // Number  
// console.log(len)                                                  // undefined  



let len1 = await fetch('https://eloquentjavascript.net/11_async.html')
    .then(rsp => rsp.text())                            // Promise<String>
    .then(text => text.length)                          // Promise<Number>
    

let len2  = await fetch('https://eloquentjavascript.net/11_async.html')
    .then(rsp => rsp.text())                            // Promise<String>
    .then(text => text.length)                          // Promise<Number>


// let len1 = await p1 
// let len2 = await p2 

console.log(len1+len2)

join2Promises(p1, p2)
    .then(sum =>  console.log(sum))
    

function join2Promises(p1, p2) {
    return p1.then(
        function (v1) {
            return p2.then(function (v2)  { 
                return v1 + v2
            })
        }
    )
}


    // p1.then(len1 => p2.then(len2 => len2))
// p1.then(processLen)     // Promise<Promise<Number>>  <=> Promise<Number>
//    .then(sum => console.log(sum))




console.log('Nothing more to do')