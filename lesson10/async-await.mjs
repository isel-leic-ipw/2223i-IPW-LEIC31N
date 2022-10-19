import fetch from 'node-fetch'


async function f(URL) {
    return 5
}

console.log(f())


const URL = 'https://eloquentjavascript.net/11_async.html'


function processResults(str) {
    console.log("Process results..")
}


function processError(str) {
    console.log("Process Error..")
}

async function makeRequestAw(url) {
    try {
        let response = await fetch(url)
        let str = await response.text()
        processResults(str)
    } catch (err) {
        processError(err)
    }
}


// makeRequestAw(URL)
// console.log("SLB")

function makeRequestPr() {
    return fetch(URL)
        .then(response => response.text())
        .then(processResults)
        .catch(processError)
}


let p1 = makeRequestAw(URL)
let p2 = makeRequestPr(URL)

console.log(p1)
console.log(p2)

function makeRequest() {
    console.log("make-request")
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(undefined) }, 1000)
    })
}

let start = Date.now()

async function makeRequestsVeryVeryVeryVeryVeryDisgusting(...uris) {
    let resP = []
    for(let i = 0; i < uris.length; ++i) {
        resP[i] = makeRequest(uris[i])
    }

    let res = []
    for(let i = 0; i < resP.length; ++i) {
        res[i] = await resP[i]
    }
    return res
}


async function makeRequestsVeryVeryElegant(...uris) {
    return Promise.all(uris.map(makeRequest))

}


await makeRequests(1,2,3)

let end = Date.now()
console.log(end-start)
// console.log(await p1)
// console.log(await p2)

p1.then(v => console.log(v))
p2.then(v => console.log(v))



// async function all(...promises) {
//     return new Promise((resolve, reject) => {
//         let res = []
//         let count = 0
//         let rejected = false
//         for (let i = 0; i < promises.length; ++i) {
//             promises[i].then(val => {
//                 res[i] = val
//                 if (++count == promises.length) {
//                     resolve(res)
//                 }
//             })
//                 .catch(e => {
//                     if (!rejected) {
//                         rejected = true
//                         reject(e)
//                     }
//                 })
//         }
//     })

// }

// async function allAw(...promises) {
//     return new Promise(async (resolve, reject) => {
//         let res = []
//         let count = 0
//         let rejected = false
//         for (let i = 0; i < promises.length; ++i) {
//             try {
//                 let val = await promises[i]
//                 res[i] = val
//                 if (++count == promises.length) {
//                     resolve(res)
//                 }
//             } catch (e) {
//                 if (!rejected) {
//                     rejected = true
//                     reject(e)
//                 }
//             }
//         }
//     })
// }



// let p1 = makeRequestAw('https://eloquentjavascript.net/11_async.html')
// let p2 = makeRequestAw('https://eloquentjavascript.net/11_async.html')

// let prms = ids.map(id => fetch())
// let values = await Promise.all(prms)

// let a = [p1, p2]
// let v1 = await p1
// let v2 = await p2
