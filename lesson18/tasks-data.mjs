// Module manages application data.
// In this specific module, data is stored in memory

const NUM_TASKS = 3

let tasks = new Array(NUM_TASKS).fill(0, 0, NUM_TASKS)
    .map((_, idx) => { 
        return {
            id: idx,
            title: `Task ${idx}`,
            description: `Task ${idx} description`
        } 
    })

let maxId = NUM_TASKS

export async function getTasks() {
    return tasks
}

export async function getTask(taskId) {
    return tasks.find(task => task.id == taskId)
}

export async function deleteTask(taskId) {
    
    const taskIdx = tasks.findIndex(task => task.id == taskId)
    if(taskIdx != -1) {
        tasks.splice(taskIdx, 1)
        return true
    } 
    return false
}

export async function createTask(taskToCreate) {
    let newTask = {
        id: getNewId(), 
        title: taskToCreate.title,
        description: taskToCreate.description,
    }

    
    tasks.push(newTask)
    return newTask
}

export async function updateTask(taskId, newTask) {
    const task = tasks.find(task => task.id == taskId)
    if(task != undefined) {
        task.title = newTask.title
        task.description = newTask.description
        return task
    } 
}

function getNewId() {
    return maxId++
}

