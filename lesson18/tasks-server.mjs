// Application Entry Point. 
// Register all HTTP API routes and starts the server

import express from 'express'
import * as api from './tasks-http-api.mjs'
import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'
import cors from 'cors'

const swaggerDocument = yaml.load('./docs/tasks-api.yaml')
const PORT = 1904

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

