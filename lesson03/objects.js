let name1 = "Gonçalo Ramos"
let number1 = 1234

let name2 = "Bah"
let number2 = 2345

console.log(name1)
console.log(number)

console.log(name2)
console.log(number2)

var p1 = {
    name: "Gonçalo Ramos",
    number: 1234,
    address: {
        street: "Avenida a, Nº 3",
        postalCode: "1000-000",
        locality: "Lisboa"
    }
}


var p2 = {
    name: "Bah",
    number: 123,
    address: {
        street: "Avenida b, Nº 4",
        postalCode: "1000-000",
        locality: "Lisboa"
    }
}


console.log("---------------------")

console.log(p1.name)
console.log(p1.number)
console.log(p1.address.street)
console.log(p1.address.postalCode)

console.log(p2.name)
console.log(p2.number)


p1.Name = 34567
p1.address = "Benfica"
p1.age = 25

delete p2.name



console.log(p1.Name)
console.log(p1['Name'])


let o = { 
    firstName: 'Afonso',
    d : "O Maior", 
    e : 20, 
    g: { 
        a: "SLB", 
        b: 10, 
        ' nome $ esquisito': function() {} 
    } 
}

let cebolas = 'a'

let b = o.g[cebolas]

o.a = 10
o.b = "slb"
o.f = function() {}
console.log(o.g[' nome $ esquisito'])

console.log(o)

delete o.b

console.log(o)

// Using dot notation
console.log(o.a)
// Using subscript notation
console.log(o['a'])

let a = 10

console.log(o[a])


let propName = getPropName()
o[propName]
//o.propName

// o[' a$very&strange()name"for*an identifier'] = 0
// console.log(o)







