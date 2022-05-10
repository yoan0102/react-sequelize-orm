import express from 'express'
import logger from 'morgan'
import projectRoutes from './routes/projects.routes.js'

const app = express()

app.use(express.json())
app.use(logger('dev'))

app.use('/api', projectRoutes)



export default app