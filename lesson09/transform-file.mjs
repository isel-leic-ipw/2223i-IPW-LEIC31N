import { readFile, writeFile } from 'fs/promises'



const IDS_FILE = './ids.json'
const ODD_IDS_FILE = './odd-ids.json'

console.log(`Reading file ${IDS_FILE}`)
let p = readFile(IDS_FILE)

p
    .then(processResultSuccess)
    .catch(processResultError)

console.log("End")


function processResultSuccess(fileContent) {
    console.log("processSuccess")

    let obj = JSON.parse(fileContent)
    
    let a = obj['movie-ids'].filter(id => Number(id.at(-1)) % 2 == 1) 
    let jsonStr = JSON.stringify(a)
    writeFile(ODD_IDS_FILE, jsonStr)
        .then(() => console.log(`File ${ODD_IDS_FILE} created`))
        .catch(err => console.log(`Error writing file ${ODD_IDS_FILE}: ${err}`))

    

}

function processResultError(error) {
    console.log("processError")
}

