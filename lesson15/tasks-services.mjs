// Module that contains the functions that handle all HTTP APi requests§


const NUM_TASKS = 3

let tasks = new Array(NUM_TASKS).fill(0, 0, NUM_TASKS)
    .map((_, idx) => { 
        return {
            id: idx,
            title: `Task ${idx}`,
            description: `Task ${idx} description`
        } 
    })

let currId = NUM_TASKS


export function getTasks() {
    return tasks
}

export function getTask(taskId) {
    // Validate task id
    return tasks.find(task => task.id == taskId)
}

export function deleteTask(taskId) {
    return findTaskAndProcessIt(taskId, (_, taskIdx) => tasks.splice(taskIdx, 1)) != undefined
}

export function updateTask(taskId, taskToCreate) {
    if(!isValidString(taskToCreate.title)) {
        throw "Invalid title"
    }

    return findTaskAndProcessIt(
        taskId, 
        (task) =>  { 
            task.title = taskToCreate.title
            task.description = taskToCreate.description
        },
    )
}

export function createTask(taskToCreate) {
    if(!isValidString(taskToCreate.title)) {
        throw "Invalid title"
        
    }
    let newTask = {
        id: getNextId(), 
        title: taskToCreate.title,
        description: taskToCreate.description,
    }
    
    newTask.id = getNextId()
    tasks.push(newTask)
    return newTask
}

// Auxiliary functions
function findTaskAndProcessIt(taskId, action) {
    const taskIdx = tasks.findIndex(task => task.id == taskId)
    if(taskIdx != -1) {
        const task = tasks[taskIdx]
        action(task, taskIdx)
        return task
    } 
}


function getNextId() {
    return currId++

}

function isValidString(value) {
    return typeof value == 'string' && value != ""

}