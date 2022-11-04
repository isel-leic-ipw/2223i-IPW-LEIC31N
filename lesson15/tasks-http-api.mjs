// Module that contains the functions that handle all HTTP APi requests§

import * as tasksServices from './tasks-services.mjs'



export async function getTasks(req, rsp) {
    rsp.json(await tasksServices.getTasks())
}

export async function getTask(req, rsp) {
    const task = tasksServices.getTask(req.params.id)
    if(task != undefined) {
        rsp.json(task)
    } else {
        rsp.status(404).json({error: `Task with id ${taskId} not found`})
    }
}

export async function deleteTask(req, rsp) {
    const taskId = req.params.id
    try {
        const deleted = tasksServices.deleteTask(taskId)
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
    try {
        const taskId = req.params.id
        const updatedTask = tasksServices.updateTask(taskId, req.body)
        if(updatedTask) {
            rsp.json({status: `Task with id ${taskId} updated with success`})
        } else {
            rsp.status(404).json({error: `Task with id ${taskId} not found`})
        }
    } catch(e) {
        rsp.status(500).json({error: `Error updating Task with id ${taskId} `})
    }
}

export function createTask(req, rsp) {
    try {
        const newTask = tasksServices.createTask(req.body)
        rsp.status(201).json({status: `new task created`, newTask: newTask })
    } catch(e) {
        rsp.status(400).json({error: `Error creating task: ${e} `})
    }
}

// Auxiliary functions
function findTaskAndProcessIt(taskId, rsp, action, actionDescription = "processed") {
    const taskIdx = tasksServices.getTask(taskId)
    tasks.findIndex(task => task.id == taskId)
    if(taskIdx != -1) {
        action(tasks[taskIdx], taskIdx)
        rsp.json({status: `Task with id ${taskId} ${actionDescription} with success`})
    } else {
        rsp.status(404).json({error: `Task with id ${taskId} not found`})
    }
}


function getNextId() {
    return currId++

}

function isValidString(value) {
    return typeof value == 'string' && value != ""

}