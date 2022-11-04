import fetch from 'node-fetch'

const DEFAULT_CACHE_FILE_PATH = ""

let CACHE_FILE_PATH = null

export function(path = DEFAULT_CACHE_FILE_PATH) {
    // All module initialization validations
    CACHE_FILE_PATH = path
    return myFetch
}

myFetch = null

let moviesCache = null

if(process.env.LOCAL_CACHE) {
    myFetch = onlyLocalFetch
} else {
    myFetch = localAndApiFetch
}


function onlyLocalFetch(url) {

    if(CACHE_FILE_PATH == null) {
        throw "You need to call setFilePath before using this function"
    }
    let movieId = getId(url)
    if(moviesCache) {
        let movie = moviesCache.find(m => m.id == movieId)
        if(movie) {
            return Promise.resolve(movie)
        }

        fetch(url)
            .then(rsp => rsp.json())
            .then(obj => writeFile(obj, "sdfdsfds"))
    }
}


function writeFile(obj, path) {

}

function localAndApiFetch() {

}
