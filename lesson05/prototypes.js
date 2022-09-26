
// let o = { }
// let o1 = new Object()


// console.log(Object)
// console.log(o.constructor)
// console.log(o1.constructor)
// console.assert(Object === o.constructor)
// console.assert(Object === o1.constructor)

// let a = []
// let a1 = new Array()

// console.assert(Array === a.constructor)
// console.assert(Array === a1.constructor)

// console.log(Array.prototype)


// let s1 = "SLB"
// let s2 = new String("Benfica")

// console.assert(String === s1.constructor)
// console.assert(String === s2.constructor)


// function Point(x, y) {
//   this.x = x
//   this.y = y
  
//   // this.add = function slb(p) {
//   //     return new Point(this.x + p.x, this.y + p.y)
//   // }

//   console.log(this);
// }


// Point.prototype.add = function (p) {
//   return new Point(this.x+p.x, this.y+p.y)
// }



// let p1 = new Point(2,3)
// let p2 = new Point(4,5)

// console.log(p1.constructor)
// console.log(p2.constructor)
// console.assert(Point === p1.constructor)
// console.assert(Point === p2.constructor)



// let p3 = p1.add(p2)

// // console.log(`p3 = ${p3}`)


// //---------------------------------

let s = new String("Glorioso");

console.log("##" + s.enclose)
console.log("##" + s.constructor)


String.prototype.enclose = function () {
   return `SLB ${this} SLB`
}

console.log("##" + s.substring(3,8))

String.prototype.substring = function () {
  return `Busted!!!!`
}

console.log("##" + s.substring(3,8))

console.log("###" + s.enclose)

// let s3 = "SLB"
// console.log(s3.enclose())
console.log(s.enclose());


// // //Using a global variable to store the old implementation
// // let oldConcat = String.prototype.concat
// // String.prototype.concat = function (...args) {
// //   const PREFIX = " S.L.B "
// //   let newArgs = args.map(s => PREFIX + s)
// //   return oldConcat.apply(PREFIX + this, newArgs)
// // }


// // // Storing the old implementation in String prototype
// // String.prototype.oldConcat = String.prototype.concat;
// // String.prototype.concat = function (...args) {
// //   const PREFIX = " S.L.B "
// //   args = args.map(s => PREFIX + s)
// //   return this.oldConcat(args)
// // }

// // // Using an anonymous function to create a closure capturing the old implementation reference

// // (function () {
// //   // Using a global variable to store the old implementation
// //   let oldConcat = String.prototype.concat;
// //   String.prototype.concat = function (...args) {
// //     const PREFIX = " S.L.B "
// //     args = args.map(s => PREFIX + s)
// //     return oldConcat.apply(this, args)
// //   }
// // })()



// // // Creating a new scope to create a new closure
// // {
// // // Using a global variable to store the old implementation
// //     let oldConcat = String.prototype.concat;
// //     String.prototype.concat = function (...args) {
// //       const PREFIX = " S.L.B "
// //       args = args.map(s => PREFIX + s)
// //       return oldConcat.apply(this, args)
// //     }
// // }


// console.log("---------")
// console.log(s.concat(s3, s3, s))

// // // The following clone throws an error indicating 'oldConcat' is not defined.
// // // Thats Good, because is what we wanted!!!
// console.log(oldConcat)
