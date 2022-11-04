import fetch from 'node-fetch'


const URL = 'http://localhost:9200/movies/_doc/slb'
//const URL = 'http://www.isel.pt/'

const req = {
    method: 'PUT',
    headers: {
        Host: 'localhost',
        'User-Agent': "SLB",
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "Movie333",
        duration: 200
    }),
    redirect: 'manual'

}
let rsp = await fetch(URL, req)
console.log(rsp)

