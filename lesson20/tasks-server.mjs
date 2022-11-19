// Application Entry Point. 
// Register all HTTP API routes and starts the server

import express from 'express'

import * as tasksData from './data/tasks-data-mem.mjs'
import * as usersData from './data/users-data-mem.mjs'
import tasksServicesInit from './services/tasks-services.mjs'
import tasksApiInit from './api/tasks-http-api.mjs'

import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'
import cors from 'cors'

const tasksServices = tasksServicesInit(tasksData, usersData)
const tasksApi = tasksApiInit(tasksServices)

const swaggerDocument = yaml.load('./docs/tasks-api.yaml')
const PORT = 1904

console.log("Start setting up server")
let app = express()

app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json())

app.get('/tasks', tasksApi.getTasks)
app.get('/tasks/:id', tasksApi.getTask)
app.delete('/tasks/:id', tasksApi.deleteTask)
app.post('/tasks', tasksApi.createTask)
app.put('/tasks/:id', tasksApi.updateTask)

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("End setting up server")

// Route handling functions

