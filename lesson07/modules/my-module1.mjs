console.log("Begin my-module1")

import log from './my-module2.mjs'

export function div(a, b) {
    log('Received ' + a + " and " + b)
    return a/b
}

console.log("End my-module1")
