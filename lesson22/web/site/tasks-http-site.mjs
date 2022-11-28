// Module that contains the functions that handle all HTTP Web site requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoke the corresponding operation on services
//  - Generate the response in HTML format






export default function (tasksServices) {
    // Validate argument

    return {
        getTask: handleRequest(getTask)
    }

    async function getTask(req, rsp) {
        const taskId = req.params.id
        const task = await tasksServices.getTask(req.token, taskId)
        rsp.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <link rel="stylesheet" href="site.css">
            <meta charset="utf-8">
            <title>${task.title}</title>
          </head>
          <body>
            <h2>${task.title}</h2>
            <p>${task.description}</p>
          </body>
        </html>
        `)

    }

    function handleRequest(handler) {
        return async function (req, rsp) {
            req.token = 'ef604e80-a351-4d13-b78f-c888f3e63b61'
            try {
                await handler(req, rsp)
            } catch (e) {
                const response = toHttpResponse(e)
                rsp.status(response.status).json({ error: response.body })
                console.log(e)
            }
        }
    }

}