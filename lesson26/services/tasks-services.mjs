// Module that implements all tasks management logic

import {MAX_LIMIT} from './services-constants.mjs'
import errors from '../errors.mjs'

export default function (tasksData, usersData) {
    // Validate arguments
    if (!tasksData) {
        throw errors.INVALID_PARAMETER('tasksData')
    }
    if (!usersData) {
        throw errors.INVALID_PARAMETER('usersData')
    }

    return {
        getTasks: getTasks,
        getTask: getTask,
        updateTask: updateTask,
        deleteTask: deleteTask,
        createTask: createTask,
    }

    async function getTasks(userToken, q, skip = 0, limit = MAX_LIMIT) {
        limit = Number(limit)
        skip = Number(skip)
        if(    isNaN(limit)
            || isNaN(skip) 
            || skip > MAX_LIMIT 
            || limit > MAX_LIMIT
            || (skip+limit) > MAX_LIMIT
            || skip < 0
            || limit < 0
        ) {
            throw errors.INVALID_PARAMETER(`skip or limit`, `Skip and limit must be positive, less than ${MAX_LIMIT} and its sum must be less or equal to ${MAX_LIMIT}`)
        }
    
        const user = await usersData.getUser(userToken)
        if(!user) {
            throw errors.USER_NOT_FOUND()
        }
        return tasksData.getTasks(user.id, q, skip, limit)
    }
    
    
    async function getTask(userToken, taskId) {
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
    
    
    async function deleteTask(userToken, taskId) {
        // Validate taskId
        const user = await usersData.getUser(userToken)
        if(!user) {
            throw errors.USER_NOT_FOUND()
        }
        return tasksData.deleteTask(user.id, taskId)
    }
    
    async function createTask(userToken, taskRepresentation) {
        // Validate all task properties
    
        const user = await usersData.getUser(userToken)
        if(!user) {
            throw errors.USER_NOT_FOUND()
        }
        if(!isValidString(taskRepresentation.title)) {
             throw errors.INVALID_PARAMETER('title')
        }
        return tasksData.createTask(user.id, taskRepresentation)
    }
    
    async function updateTask(userToken, taskId, taskRepresentation) {
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
} 

