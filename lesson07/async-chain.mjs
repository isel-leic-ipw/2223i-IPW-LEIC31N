// Synchronous model

function operA() {
    return "a"
}

function operB(a) {
    return a + "b"
}

function operC(b) {
    return b + "c"
}

let a = operA()
let b = operB(a)
let c = operC(b)
console.log(c)

console.log(operC(operB(operA())))


// Asynchronous model with callbacks

function operACb(cbA) {
    cbA("a")
}

function operBCb(a, cbB) {
    cbB(a + "b")
}

function operCCb(b, cbC) {
    cbC(b + "c")
}

operACb(a => {
    operBCb(a, b => {
        operCCb(b, c => {
            console.log(c)
        })
    })
})

operACb(processAResult)

function processAResult(a) {
    operBCb(a, processBResult)    
}

function processBResult(b) {
    operCCb(b, processCResult)
}

function processCResult(c) {
    console.log(c)
}

// Asynchronous model with Promises

function operAPr() {
    
}

function operBPr(a) {
}

function operCPr(b) {
}


operAPr()
    .then(processAResult)
    .then(processBResult)
    .then(processCResult)
    .catch()


function processAResult(a) {
    return operBPr(a)
}

function processBResult(b) {
    return operCPr(b)
}

function processCResult(c) {
    console.log(c)
}