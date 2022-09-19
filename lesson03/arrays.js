//let a = [1,2,3,4,5]
let a = [1,"2",3,4,5, "Sport", "Lisboa", "e", "Benfica"]
let o = {'0': 1, '1': 2, '2': 3, '3': 4, '4': 5}

console.log(a[0])
console.log(o[0])

console.log(a)
console.log(o)
console.log(a.length)
console.log(o.length)

a.a = "SLB"
console.log(a)
console.log(a.length)

a[1327] = 55
a[57625] = 99
console.log(a)
console.log(a.length)
console.log(a[57000])
console.log(a[58000])


a.length = 3
console.log(a)

// let last = a.pop()
let last = a[a.length-1]
--a.length


console.log(last)
console.log(a)

a[a.length] = 123  // a.push(123)
console.log(a)
console.log(a.length)

