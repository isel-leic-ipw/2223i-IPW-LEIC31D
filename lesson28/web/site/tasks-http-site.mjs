// Module that contains the functions that handle all HTTP APi requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoke the corresponding operation on services
//  - Generate the response in HTML format

import url from 'url'
import { deleteTask, updateTask } from '../../data/tasks-data-mem.mjs';
import toHttpResponse from '../api/response-errors.mjs'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default function (tasksServices) {
    // Validate argument

    return {
        getHome: getHome,
        getCss: getCss,
        getCss: getCss,
        getTask: handleRequest(getTask),
        getTasks: handleRequest(getTasks),
        createTask: handleRequest(createTask),
        deleteTask: handleRequest(deleteTask),
        updateTask: handleRequest(updateTask),
        getNewTask: getNewTask,
        showTracking: showTracking,
        validateLogin: validateLogin,
    
    }

    async function getHome(req, rsp) {
      sendFile('index.html', rsp)
    }

    async function getCss(req, rsp) {
      sendFile('site.css', rsp)
    }

    async function getTasks(req, rsp) {
      const tasks = await tasksServices.getTasks(req.token, req.query.q, req.query.skip, req.query.limit)
      return { name: 'tasks', data: { title: 'All tasks', tasks: tasks} }  
    }

    async function getTask(req, rsp) {
      const taskId = req.params.id
      const task = await tasksServices.getTask(req.token, taskId)
      return { name: 'task', data: {task: task, token: req.token } }
    }
    
    async function getNewTask(req, rsp) {
      rsp.render('newTask') 
    }

    async function createTask(req, rsp) {
      console.log(req.body)
      let newTask = await tasksServices.createTask(req.token, req.body)
      rsp.redirect('/tasks')
    }

    async function deleteTask(req, rsp) {
      const taskId = req.params.id
      const task = await tasksServices.deleteTask(req.token, taskId)
      rsp.redirect('/tasks')
    }

    async function updateTask(req, rsp) {

    }

    async function validateLogin(req, rsp) {
      const username = req.body.username
      const pass = req.body.password

      const user = await tasksServices.getUser(username, pas)

      req.login({username: user.name, token: user.token}, () => rsp.redirect('/tasks'))

    }

    async function showTracking(req, rsp) {
      let cookies = req.get("Cookie")
      cookies = decodeURIComponent(cookies)
      console.log("##############")
      console.log(cookies)
      cookies = cookies.split(";")
      rsp.render("showTracking", { cookies })
    }
    

    function sendFile(fileName, rsp) {
      const fileLocation = __dirname + 'public/' + fileName
      rsp.sendFile(fileLocation)
    }


    function handleRequest(handler) {
      // TODO: While we do not have authentication in site interface, 
      // let's hardcode a token for one user 
      const HAMMER_TOKEN = 'ef604e80-a351-4d13-b78f-c888f3e63b61'
      return async function(req, rsp) {
          req.token = HAMMER_TOKEN
          try {
              let view = await handler(req, rsp)
              if(view) {
                rsp.render(view.name , view.data)
              }
          } catch(e) {
              // TODO: Hammer time again. We are in an HTML response format
              // returning errors in Json format
              const response = toHttpResponse(e)
              rsp.status(response.status).json(response.body)
              console.log(e)
          }
      }
  }
}

