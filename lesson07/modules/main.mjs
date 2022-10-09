// main.js -> my-module1 -> my-module2
//         -> my-module2
//         -> my-module3

console.log("Begin main")

import {div} from './my-module1.mjs'
import log, { add, time } from './my-module2.mjs'
import  './my-module3.mjs'

console.log(add(2,3))
console.log(div(5,2))

log("Glorioso".enclose())

console.log("End")