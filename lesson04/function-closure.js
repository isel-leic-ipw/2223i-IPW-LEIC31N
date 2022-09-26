
function f(p) {
  return function (p1) {
    console.log(p)
    p = p1
   }
}

let f2 = f(2)
f2()            // 2
f2(10)          // undefined
f2(22)            // 10 


let f3 = f(3)
f3()            // 3
f2()            // 22
f3(1)           // undefined

let f31 = f3
f31()            // 1

f2 = null


console.log("-------------------")

function f4(n) {
  let af = [];
  

  for(let i = 0; i < n; ++i) {
    af[i] = function() {
      //console.log(n)
      console.log(i)
    }
  }
  
  return af
}



let arrFuncs = f4(4);


for(let i = 0; i < arrFuncs.length; ++i) {
  arrFuncs[i]()
}




let f5 = arrFuncs[0]
f5()

// // Now closure created on f4 first iteration is not accessible anymore, therefore can be garbage collected
arrFuncs[0] = f5 = null


