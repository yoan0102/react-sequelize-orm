import { Router } from 'express'
import { createTask } from '../controllers/tasks.controller.js'

const router = Router()


router.get('/tasks',)
router.get('/tasks/:id',)
// router.patch('/projects/:id')
router.post('/tasks', createTask)
router.put('/tasks/:id',)
router.delete('/tasks/:id',)



export default router