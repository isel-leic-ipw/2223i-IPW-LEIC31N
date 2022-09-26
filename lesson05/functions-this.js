"use strict"

function f() {
  console.log(`this =`, this)
}

function Point(x, y) {
  this.x = x
  this.y = y

  this.add = function slb(p) {
    return new Point(this.x + p.x, this.y + p.y)
  }

  console.log(this);
}

// Point.prototype.add = function(p) {
//   return new Point(this.x+p.x, this.y+p.y)
// }

// 1st way: As a global function
// this refers to the Global Object
console.log(`1st way: As a global function`)
f()

// 2nd way: As a method
// this refers to the object with the method
console.log(`2nd way: As a method`)
let o = {
  m: f
}

o.m()

// // 3rd way: As a constructor
// // this refers to the newly created object
console.log(`3rd way: As a constructor`)

let o1 = new f()
let p1 = new Point(2, 3)
let p11 = new Point(3, 4)

let p2 = p1.add(p11)

let f2 = p1.add;

// //Point(2,3) // Don't call constructor function in a global way. Raises an error in strict mode
//let p22 = f2(p1) // Don't call method as a global function


// 4th way: Using methods call or apply
// this will be the first argument passed to one of this functions
console.log(`4th way: Using methods call or apply`)

let p3 = Point.call(new Object(), [2,3]) // = new Point(2,3)
//Point.apply(new Object(), [4,5])


var str = "Benfica"
console.log(str.substring(1,3))
console.log(str.substring.call(str, 1,3))
console.log(str.substring.apply(str, [1,3]))


function add(a,b) {
  return a+b;
}

function times(a,b,c) {
  return a*b*c;
}




// function showArguments(f) {
//   return function(...args) {
//     console.log("Arguments passed are:" , args)
//     return f.apply(this, args)

//   }
// }


// saAdd = showArguments(add)
// saTimes = showArguments(times)

// console.log(saAdd(2,3))
// console.log(saTimes(2,3))


// 


function showArguments(f) {
  return function(...args) {
    console.log("#####", args)
    return f.apply(this, args)
  }
}

let saAdd = showArguments(add)
let saTimes = showArguments(times)

console.log(add(3,5))   // 8
console.log(saAdd(3,5))   // 8
console.log(times(3,5,2)) // 30
console.log(saTimes(3,5,2)) // 30

console.log(1,"SLB", { a: 123}, [1,2,3,4,5])

let myConsole = showArguments(console.log)

myConsole(1,"SLB", { a: 123}, [1,2,3,4,5])


