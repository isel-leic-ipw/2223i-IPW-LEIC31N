// Module that contains the functions that handle all HTTP APi requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoke the corresponding operation on services
//  - Generate the response


import * as tasksServices from './tasks-services.mjs'

export let getTasks = handleRequest(getTasksInternal)
export let getTask = handleRequest(getTaskInternal)

async function getTasksInternal(req, rsp) {
    rsp.json(await tasksServices.getTasks(req.token))
}

async function getTaskInternal(req, rsp) {
    const taskId = req.params.id
    const task = await tasksServices.getTask(taskId, req.token)
    if(task != undefined) {
        rsp.json(task)
    } else {
        rsp.status(404).json({error: `Task with id ${taskId} not found`})
    }

}

export async function deleteTask(req, rsp) {
    const taskId = req.params.id
    try {
        const deleted = await tasksServices.deleteTask(taskId)
        if(deleted) {
            rsp.json({status: `Task with id ${taskId} deleted with success`})
        } else {
            rsp.status(404).json({error: `Task with id ${taskId} not found`})
        }
    } catch(e) {
        console.log(e)
        rsp.status(500).json({error: `Error deleting Task with id ${taskId}.`})
    }
}

export async function updateTask(req, rsp) {
    const taskId = req.params.id
    try {
        const updatedTask = await tasksServices.updateTask(taskId, req.body)
        if(updatedTask) {
            rsp.json({status: `Task with id ${taskId} updated with success`})
        } else {
            rsp.status(404).json({error: `Task with id ${taskId} not found`})
        }
    } catch(e) {
        console.log(e)
        rsp.status(500).json({error: `Error updating Task with id ${taskId} `})
    }
}

export async function createTask(req, rsp) {
    try {
        const newTask = await tasksServices.createTask(req.body)
        rsp.status(201).json({status: `new task created`, newTask: newTask })
    } catch(e) {
        rsp.status(400).json({error: `Error creating task: ${e} `})
    }
}


function handleRequest(handler) {
    return function(req, rsp) {
        let token = req.get("Authorization")
        console.log(token)
        if(!(token && token.startsWith("Bearer "))) {
            rsp
                .status(401)
                .json({error: `Invalid token`})
            return
            
        }
        req.token = token.split(" ")[1]
        handler(req, rsp)
    
    }
}

