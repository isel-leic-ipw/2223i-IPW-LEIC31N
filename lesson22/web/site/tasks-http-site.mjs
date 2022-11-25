// Module that contains the functions that handle all HTTP Web site requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoke the corresponding operation on services
//  - Generate the response in HTML format

import url from 'url'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export default function (tasksServices) {
    // Validate argument
    
    return {
        getIndex: getIndex
        
    }


    function getIndex(req, rsp) {
        rsp.set("Content-Type", "text/html")
        const options = {
            root: `${__dirname}../../static-files/`
        }
        console.log(options)
        rsp.sendFile('index.html', options)
    }

}