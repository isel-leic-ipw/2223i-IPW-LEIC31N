import { readFile } from 'node:fs/promises'



const IDS_FILE = './ids.json'

console.log(`Reading file ${IDS_FILE}`)
let p = readFile(IDS_FILE)

p
    .then(processResultSuccess)
    .catch(processResultError)

console.log("End")


function processResultSuccess(fileContent) {
    console.log("processSuccess")
    let obj = JSON.parse(fileContent)
    console.log(
        obj['movie-ids'].filter(id => Number(id.at(-1)) % 2 == 1) 
    )
}

function processResultError(error) {
    console.log("processError")
}

