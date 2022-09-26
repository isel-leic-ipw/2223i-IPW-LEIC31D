"use strict"

let o = {
    a: 123,
    b: "SLB",
    c: function (a) { 
        this.a = a
        console.log("this: ", this)
        console.log(a) 
    }
}

let f = o.c;

o.c(2321)
f(332432)




