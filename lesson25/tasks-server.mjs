// Application Entry Point. 
// Register all HTTP API routes and starts the server


import express from 'express'

import * as tasksData from './data/tasks-data-mem.mjs'
import * as usersData from './data/users-data-mem.mjs'
import tasksServicesInit from './services/tasks-services.mjs'
import tasksApiInit from './web/api/tasks-http-api.mjs'
import tasksSiteInit from './web/site/tasks-http-site.mjs'




import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'
import cors from 'cors'
import hbs from 'hbs'
import url from 'url'
import path from 'path'

const tasksServices = tasksServicesInit(tasksData, usersData)
const tasksApi = tasksApiInit(tasksServices)
const tasksSite = tasksSiteInit(tasksServices)

const swaggerDocument = yaml.load('./docs/tasks-api.yaml')
const PORT = 1904

console.log("Start setting up server")
let app = express()

app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(express.json())
app.use(express.urlencoded())

// view engine setup
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'web', 'site', 'views'));
//hbs.registerPartials(__dirname + '/views/partials')

app.use(cookieMw)

app.get('/home', tasksSite.getHome)
app.get('/tasks/newTask', tasksSite.getNewTask)
app.get('/tasks/:id', tasksSite.getTask)
app.post('/tasks/:id/delete', tasksSite.deleteTask)
app.post('/tasks/:id/update', tasksSite.updateTask)
app.get('/tasks', tasksSite.getTasks)
app.post('/tasks', tasksSite.createTask)
app.get('/site.css', tasksSite.getCss)
app.get('/showTracking', tasksSite.showTracking)

app.get('/api/tasks', tasksApi.getTasks)
app.get('/api/tasks/:id', tasksApi.getTask)
app.delete('/api/tasks/:id', tasksApi.deleteTask)
app.post('/api/tasks', tasksApi.createTask)
app.put('/api/tasks/:id', tasksApi.updateTask)

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("End setting up server")

// Route handling functions

const TRACKING_COOKIE_NAME = "TasksSiteTrackingCookie"
//const COUNT_COOKIE_NAME = "TasksSiteCookie"

function cookieMw(req, rsp, next) {
    const COOKIE_COUNTER = "taskAppCookieCounter"

    let cookies = req.get("Cookie")
    let counterCookie = 0
    if(cookies) {
        let cookie =  cookies.split(";").find(c => c.includes(COOKIE_COUNTER))
        if(cookie) {
            counterCookie = Number(cookie.split("=")[1])+1
        }

    }
    rsp.cookie(COOKIE_COUNTER, counterCookie)
    next()
}