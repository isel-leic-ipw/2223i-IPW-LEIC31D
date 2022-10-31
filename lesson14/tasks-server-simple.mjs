

import express from 'express'

const PORT = 1904

console.log("Start setting up server")
let app = express()


app.get('/tasks', function(req, rsp) {
    rsp.end(`GET tasks with query ${req.query.q}`)
})

app.get('/tasks/:id', function(req, rsp) {
    rsp.end(`GET task with id ${req.params.id}`)
})

app.delete('/tasks/:id', function(req, rsp) {
    rsp.end(`DELETE task with id ${req.params.id}`)
})

app.post('/tasks', function(req, rsp) {
    rsp.end("POST task")
})

app.put('/tasks/:id', function(req, rsp) {
    rsp.end(`PUT task with id ${req.params.id}`)
})

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("End setting up server")