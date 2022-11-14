// Module that contains the functions that handle all HTTP APi requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoke the corresponding operation on services
//  - Generate the response



import * as tasksServices from '../services/tasks-services.mjs'
import toHttpResponse from './response-errors.mjs'

export let getTasks = handleRequest(getTasksInternal)
export let searchTasks = handleRequest(searchTasksInternal)
export let getTask = handleRequest(getTaskInternal)
export let deleteTask = handleRequest(deleteTaskInternal)
export let createTask = handleRequest(createTaskInternal)
export let updateTask = handleRequest(updateTaskInternal)


async function getTasksInternal(req, rsp) {
    return await tasksServices.getTasks(req.token)
}

async function searchTasksInternal(req, rsp) {
    const searchStr = req.query.q
    return await tasksServices.searchTasks(req.token, searchStr)
}

async function getTaskInternal(req, rsp) {
    const taskId = req.params.id
    return await tasksServices.getTask(req.token, taskId)
}

export async function deleteTaskInternal(req, rsp) {
    const taskId = req.params.id
    const task = await tasksServices.deleteTask(req.token, taskId)
    return {
                status: `Task with id ${taskId} deleted with success`,
                task: task
            }
}

export async function createTaskInternal(req, rsp) {
    let newTask = await tasksServices.createTask(req.token, req.body)
    rsp.status(201)
    return {
            status: `Task with id ${newTask.id} created with success`,
            task: newTask
    }
}

export async function updateTaskInternal(req, rsp) {
    const taskId = req.params.id
    const task = await tasksServices.updateTask(req.token, taskId, req.body)
    return {
            status: `Task with id ${taskId} updated with success`,
            task: task
        }
}



// Auxiliary functions
function buildNotFoundMessage(rsp, taskId) {
    rsp
        .status(404)
        .json({error: `Task with id ${taskId} not found`})
}


function handleRequest(handler) {
    return async function(req, rsp) {
        const BEARER_STR = "Bearer "
        const tokenHeader = req.get("Authorization")
        if(!(tokenHeader && tokenHeader.startsWith(BEARER_STR) && tokenHeader.length > BEARER_STR.length)) {
            rsp
                .status(401)
                .json({error: `Invalid authentication token`})
                return
        }
        req.token = tokenHeader.split(" ")[1]
        try {
            let body = await handler(req, rsp)
            rsp.json(body)
        } catch(e) {
            const errorRsp = toHttpResponse(e)
            rsp.status(errorRsp.status).json(errorRsp.body)
        }
    }
}

