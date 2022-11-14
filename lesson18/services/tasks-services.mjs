// Module that implements all tasks management logic

import * as tasksData from '../data/tasks-data.mjs'
import * as usersData from '../data/users-data.mjs'
import errors from '../errors.mjs'

export async function getTasks(userToken) {
    const user = await usersData.getUser(userToken)
    if(!user) {
        throw errors.USER_NOT_FOUND()
    }
    return tasksData.getTasks(user.id)
}

export async function getTask(userToken, taskId) {
    // Validate taskId
    const user = await usersData.getUser(userToken)
    if(!user) {
        throw errors.USER_NOT_FOUND()
    }
    const task = await tasksData.getTask(user.id, taskId)
    if(task) {
        return task
    }

    throw errors.TASK_NOT_FOUND(taskId)
}

export async function searchTasks(userToken, search) {
    const user = await usersData.getUser(userToken)
    if(!user) {
        throw errors.USER_NOT_FOUND()
    }

    return (await tasksData.getTasks(user.id))
        .filter(task => task.title.includes(search))
        .map(task => { return { id: task.id, title: task.title }})
}

export async function deleteTask(userToken, taskId) {
    // Validate taskId
    const user = await usersData.getUser(userToken)
    if(!user) {
        throw errors.USER_NOT_FOUND()
    }

    return tasksData.deleteTask(user.id, taskId)
}

export async function createTask(userToken, taskRepresentation) {
    // Validate all task properties

    const user = await usersData.getUser(userToken)
    if(!user) {
        throw errors.USER_NOT_FOUND()
    }
    if(!isValidString(userToken, taskRepresentation.title)) {
         throw errors.INVALID_PARAMETER('title')
    }

    return tasksData.createTask(user.id, taskRepresentation)
}

export async function updateTask(userToken, taskId, taskRepresentation) {
    // Validate all task properties

    const user = await usersData.getUser(userToken)
    if(!user) {
        throw errors.USER_NOT_FOUND()
    }
    
    if(!isValidString(taskRepresentation.title)) {
        throw errors.INVALID_PARAMETER('title')
   }
   return tasksData.updateTask(user.id, taskId, taskRepresentation)
}

// Auxiliary functions


function isValidString(value) {
    return typeof value == 'string' && value != ""

}