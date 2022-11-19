// Application Entry Point. 
// Register all HTTP API routes and starts the server

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'
import cors from 'cors'

import * as tasksData from './data/tasks-data-mem.mjs'
import * as usersData from './data/users-data.mjs'
import tasksServicesInit from './services/tasks-services.mjs'
import apiInit from './api/tasks-http-api.mjs'

const swaggerDocument = yaml.load('./docs/tasks-api.yaml')
const PORT = 1904

const tasksServices = tasksServicesInit(tasksData, usersData)
const api = apiInit(tasksServices)

console.log("Start setting up server")
let app = express()

app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json())

app.get('/tasks', api.getTasks)
app.get('/tasks/:id', api.getTask)
app.delete('/tasks/:id', api.deleteTask)
app.post('/tasks', api.createTask)
app.put('/tasks/:id', api.updateTask)

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("End setting up server")

// Route handling functions

