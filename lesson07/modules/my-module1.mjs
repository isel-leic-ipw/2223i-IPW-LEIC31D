import log from './my-module2.mjs'

console.log("Begin my-module1")

export function div(a, b) {
    log('Received ' + a + " and " + b)
    return a/b
}


console.log("End my-module1")
