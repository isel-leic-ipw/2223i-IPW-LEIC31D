

import express from 'express'

const PORT = 1904

console.log("Start setting up server")
let app = express()

app.get('/tasks', getTasks)
app.get('/tasks/:id', getTask)
app.delete('/tasks/:id', deleteTask)
app.post('/tasks', createTask)
app.put('/tasks/:id', updateTask)

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("End setting up server")


/// HTTP Routes handling functions

function getTasks(req, rsp) {
    rsp.end(`GET tasks with query ${req.query.q}`)
}

function getTask(req, rsp) {
    rsp.end(`GET task with id ${req.params.id}`)
}

function deleteTask(req, rsp) {
    rsp.end(`DELETE task with id ${req.params.id}`)
}

function createTask(req, rsp) {
    rsp.end("POST task")
}

function updateTask(req, rsp) {
    rsp.end(`PUT task with id ${req.params.id}`)
}