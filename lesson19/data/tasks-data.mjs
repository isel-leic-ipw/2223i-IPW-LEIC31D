// Module manages application tasks data.
// In this specific module, data is stored in memory


const NUM_TASKS = 20

let tasks = new Array(NUM_TASKS).fill(0, 0, NUM_TASKS)
    .map((_, idx) => { 
        return {
            id: idx,
            title: `Task ${idx}`,
            description: `Task ${idx} description`,
            userId: idx % 2 
        } 
    })

let nextId = NUM_TASKS


export async function getTasks(userId, q, limit, skip = 0) {
    const predicate = q ? t => t.title.includes(q) : t => true
    const retTasks = tasks
        .filter(t => t.userId == userId)
        .filter(predicate)
    const end = limit != Infinity ? (skip+limit) : retTasks.length
    return retTasks.slice(skip,  end)
}

export async function getTask(userId, taskId) {
    return findTaskAndDoSomething(userId, taskId, task => task)
}

export async function deleteTask(userId, taskId) {
    return findTaskAndDoSomething(
        userId, 
        taskId, 
        (task, taskIdx) => { 
            tasks.splice(taskIdx, 1)
            return task
        })
}

export async function createTask(userId, taskRepresentation) {
    let newTask = {
        id: getNewId(), 
        title: taskRepresentation.title,
        description: taskRepresentation.description,
        userId: userId
    }

    tasks.push(newTask)
    return newTask

}

export async function updateTask(taskId, taskRepresentation) {
    return findTaskAndDoSomething(taskId, task => {
        task.title = taskRepresentation.title
        task.description = taskRepresentation.description
        return task
    })
}



// Auxiliary functions
function findTaskAndDoSomething(userId, taskId, action) {
    const taskIdx = tasks.findIndex(task => task.id == taskId && task.userId == userId)
    const task = tasks[taskIdx]
    if(taskIdx != -1) {
        return action(task, taskIdx)
    } 
}


function getNewId() {
    return nextId++
}
