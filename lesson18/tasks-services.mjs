// Module contains all task management logic

import * as tasksData from './tasks-data.mjs'
import * as usersData from './users-data.mjs'
import errors from './errors.mjs'


export async function getTasks(userToken) {
    let user = await usersData.getUser(userToken)

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
        throw errors.INVALID_ARGUMENT('title')
    return tasksData.createTask(taskToCreate)
}

export async function updateTask(taskId, taskToCreate) {
    // Validate new task properties
    if(isNaN(Number(taskId))) 
        throw errors.INVALID_ARGUMENT('taskId')

    if(!isAString(taskToCreate.title))
        throw errors.INVALID_ARGUMENT('title')

    return tasksData.updateTask(taskId, newTask)
}


// Auxiliary functions

function isAString(value) {
    return typeof value == 'string' && value != ""

}