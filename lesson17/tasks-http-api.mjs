// Module that contains the functions that handle all HTTP APi requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoque the corresponding operation on services
//  - Generate the response

import * as tasksServices from './tasks-services.mjs'


export async function getTasks(req, rsp) {
    const userId = req.get("Authorization").split(" ")[1]
    const tasks = await tasksServices.getTasks(userId)
    rsp.json(tasks)
}

export async function getTask(req, rsp) {
    getTaskAndAct(req.params.id, rsp, task => rsp.json(task))
}

export async function deleteTask(req, rsp) {
    const taskId = req.params.id
    const deleted = await tasksServices.deleteTask(taskId)
    if(deleted) {
        rsp.json({status: `Task with id ${taskId} deleted with success`})
    } else {
        rsp.status(404).json({error: `Task with id ${taskId} not found`})
    }
}

export async function createTask(req, rsp) {
    try {
        let newTask = await tasksServices.createTask(req.body)
        rsp
            .status(201)
            .json({
                status: `Task with id ${newTask.id} created with success`,
                newTask: newTask
                })
            
        } catch(e) {
            rsp
                .status(400)
                .json({error: `Error creating task: ${e}`})
        }
}

export async function updateTask(req, rsp) {
    getTaskAndAct(req.params.id, rsp, update)

    function update(task) {
        rsp.json({
            status: `Task with id ${task.id} updated with success`,
            newTask: task
            })
    }
}

async function getTaskAndAct(taskId, rsp, action) {
    const task = await tasksServices.getTask(taskId)
    if(task != undefined) {
        action(task)
    } else {
        rsp.status(404).json({error: `Task with id ${taskId} not found`})
    }
}

