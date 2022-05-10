import { Project } from '../models/Project.js'

export const getProjects = async (req, res) => {
  try {
    const { limit = 5, offset = 0 } = req.query
    const projects = await Project.findAll({ offset: parseInt(offset), limit: parseInt(limit) })
    const total = await Project.count()
    res.status(200).json({
      projects, total
    })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}

export const getProject = async (req, res) => {
  try {
    const { id } = req.params
    const project = await Project.findByPk(id)
    if (!project) {
      return res.status(404).json({ msg: 'Project not Found' })
    }
    return res.status(200).json(project)
  } catch (error) {

  }
}

export const createProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body
    const newProject = await Project.create({ name, priority, description })
    res.status(201).json(newProject)
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params
    const { name, priority, description } = req.body
    const project = await Project.findByPk(id)
    project.name = name
    project.priority = priority
    project.description = description
    console.log(project);
    project.save()
    res.status(200).json(project)
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params
    await Project.destroy({
      where: {
        id,
      },
    })
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}
