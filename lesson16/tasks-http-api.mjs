// Module that contains the functions that handle all HTTP APi requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoque the corresponding operation on services
//  - Generate the response


import * as tasksServices from './tasks-services.mjs'

export async function getTasks(req, rsp) {
    rsp.json(await tasksServices.getTasks())
}

export async function getTask(req, rsp) {
    const taskId = req.params.id
    const task = await tasksServices.getTask(taskId)
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

