import express from 'express'
import logger from 'morgan'
import projectRoutes from './routes/projects.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

const app = express()

app.use(express.json())
app.use(logger('dev'))

app.use('/api', projectRoutes)
app.use('/api', tasksRoutes)



export default app