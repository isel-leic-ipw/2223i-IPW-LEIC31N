// Module that contains the functions that handle all HTTP Web site requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoke the corresponding operation on services
//  - Generate the response in HTML format



import { createTask } from '../../data/tasks-data-mem.mjs'
import errors from '../../errors.mjs'
import toHttpResponse from '../api/response-errors.mjs'

function View(name, data) {
    this.name = name
    this.data = data
}


export default function (tasksServices) {
    // Validate argument

    return {
        getTask: handleRequest(getTask),
        getTasks: handleRequest(getTasks),
        getNewTaskForm: getNewTaskForm,
        createTask: handleRequest(createTask),
        deleteTask: handleRequest(deleteTask),
        updateTask: handleRequest(updateTask)
    }

    async function getTasks(req, rsp) {
        const tasks = await tasksServices.getTasks(req.token, req.query.q, req.query.skip, req.query.limit)
        return new View('tasks', { title: 'All tasks', tasks: tasks.map(t => { return { id: t.id, title: t.title, description: t.description, important: t.title.includes("3")}})  })
    }

    async function getTask(req, rsp) {
        const taskId = req.params.id
        const task = await tasksServices.getTask(req.token, taskId)
        return new View('task', task)
    }

    async function getNewTaskForm(req, rsp) {
        rsp.render('newTask')
    }

    async function createTask(req, rsp) {
        try {
            let task = await tasksServices.createTask(req.token, req.body)
            rsp.redirect(`/site/tasks/`)
        // rsp.status(302)
        // rsp.set('Location', `/site/tasks/${task.id}`)
        // rsp.end()
        } catch (e) {
            console.log(e)
            if(e.code == 1) {
                return new View('newTask', req.body)
            }
            throw e
        }
    }

    async function deleteTask(req, rsp) {
        const taskId = req.params.id
        const task = await tasksServices.deleteTask(req.token, taskId)
        rsp.redirect('/site/tasks')
    }

    async function updateTask(req, rsp) {
        
    }

    function handleRequest(handler) {
        return async function (req, rsp) {
            req.token = 'ef604e80-a351-4d13-b78f-c888f3e63b61'
            try {
                let view = await handler(req, rsp)
                if(view) {
                    rsp.render(view.name , view.data)
                }
            } catch (e) {
                const response = toHttpResponse(e)
                rsp.status(response.status).json({ error: response.body })
                console.log(e)
            }
        }
    }

}