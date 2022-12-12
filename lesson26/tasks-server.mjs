// Application Entry Point. 
// Register all HTTP API routes and starts the server


import express from 'express'
import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'
import cors from 'cors'
import url from 'url'
import path from 'path'
import hbs from 'hbs'

import * as tasksData from './data/tasks-data-mem.mjs'
import * as usersData from './data/users-data.mjs'
import tasksServicesInit from './services/tasks-services.mjs'
import apiInit from './web/api/tasks-http-api.mjs'
import siteInit from './web/site/tasks-http-site.mjs'
const swaggerDocument = yaml.load('./docs/tasks-api.yaml')
const PORT = 1904

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const tasksServices = tasksServicesInit(tasksData, usersData)
const api = apiInit(tasksServices)
const site = siteInit(tasksServices)

console.log("Start setting up server")
let app = express()

app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json())
app.use(express.urlencoded())

// View engine setup
const viewsPath = path.join(__dirname, 'web', 'site', 'views')
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(path.join(viewsPath, 'partials'))


app.use(foo)
// Web site routes
app.use('/site/public', express.static(`${__dirname}./static-files`, {redirect: false, index: 'index.txt'}))
app.get('/site/tasks/new', site.getNewTaskForm)
app.get('/site/tasks/:id', site.getTask)
app.get('/site/tasks', site.getTasks)
app.post('/site/tasks', site.createTask)
app.post('/site/tasks/:id/delete', site.deleteTask)
app.post('/site/tasks/:id/edit', site.updateTask)
app.get('/foo', foo)

// Web api routes 
app.get('/api/tasks', api.getTasks)
app.get('/api/tasks/:id', api.getTask)
app.delete('/api/tasks/:id', api.deleteTask)
app.post('/api/tasks', api.createTask)
app.put('/api/tasks/:id', api.updateTask)

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("End setting up server")

// Route handling functions

function foo(req, rsp, next) {
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
