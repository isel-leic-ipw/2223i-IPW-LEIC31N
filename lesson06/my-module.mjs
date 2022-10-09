
export function add(a, b) {
    if(!(Number(a) && Number(b)))
        throw "Arguments a and b must be numbers"
    return a+b
}

export function times(a, b) {
    return a*b
}

export default function(foo) {
    console.log("Received " + foo)
}

