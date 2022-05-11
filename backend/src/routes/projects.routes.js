import { Router } from 'express'
import { getProjects, createProject, updateProject, deleteProject, getProject, getProjectTasks } from '../controllers/project.controller.js'
const router = Router()


router.get('/projects', getProjects)
router.get('/projects/:id', getProject)
// router.patch('/projects/:id')
router.post('/projects', createProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)

router.get('/projects/:id/tasks', getProjectTasks)


export default router