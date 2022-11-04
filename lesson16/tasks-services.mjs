// Module contains all task management logic

import * as tasksData from './tasks-data.mjs'


export async function getTasks() {
    return tasksData.getTasks()
}

export async function getTask(taskId) {
    // Validate taskId
    return tasksData.getTask(taskId)
}

export async function deleteTask(taskId) {
    // Validate taskId
    return tasksData.deleteTask(taskId)
}

export async function createTask(taskToCreate) {
    // Validate new task properties
    if(!isAString(taskToCreate.title))
        throw "Invalid Argument"
    
    return tasksData.createTask(taskToCreate)
}

export async function updateTask(taskId, taskToCreate) {
    // Validate new task properties
    if(!isAString(taskToCreate.title))
        throw "Invalid Argument"

    return tasksData.updateTask(taskId, taskToCreate)
}


// Auxiliary functions

function isAString(value) {
    return typeof value == 'string' && value != ""

}