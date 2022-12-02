// Module that contains the functions that handle all HTTP Web site requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoke the corresponding operation on services
//  - Generate the response in HTML format



import toHttpResponse from '../api/response-errors.mjs'

function View(name, data) {
    this.name = name
    this.data = data
}


export default function (tasksServices) {
    // Validate argument

    return {
        getTask: handleRequest(getTask),
        getTasks: handleRequest(getTasks)
    }

    async function getTasks(req, rsp) {
        const tasks = await tasksServices.getTasks(req.token, req.query.q, req.query.skip, req.query.limit)
        return new View('tasks', { title: 'All tasks', tasks: tasks.map(t => { return { title: t.title, description: t.description, important: t.title.includes("3")}})  })
    }

    async function getTask(req, rsp) {
        const taskId = req.params.id
        const task = await tasksServices.getTask(req.token, taskId)
        return new View('task', task)
    }

    function handleRequest(handler) {
        return async function (req, rsp) {
            req.token = 'ef604e80-a351-4d13-b78f-c888f3e63b61'
            try {
                let view = await handler(req, rsp)
                rsp.render(view.name , view.data)
            } catch (e) {
                const response = toHttpResponse(e)
                rsp.status(response.status).json({ error: response.body })
                console.log(e)
            }
        }
    }

}