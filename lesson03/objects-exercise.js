// Exercise

// Create two objects:
// - The first has properties n1 and n2, with one string value and one number value
// - The second has properties named with the values of the first object, and each one 
// has as values the corresponding names


const P1 = 'n123'
const P2 = 'n2'

let o1 = {
    [P1]: 123,
    [P2]: "Benfica"
}

let o2 = {
    '123': 'n1',
    Benfica: 'n2'
}

console.log(o2)
// o3[o1.n1] = 'n1'
// o3[o1.n2] = 'n2'

let o3 = {
    [o1[P1]]: P1,
    [o1[P2]]: P2,

}

console.log(o3)

let o4 = { }

for(let n in o1) {
    // let value = n
    // let name = o1[n]
    // o4[name] = value
    o4[o1[n]] = n
}

console.log(o1)
console.log(o4)
