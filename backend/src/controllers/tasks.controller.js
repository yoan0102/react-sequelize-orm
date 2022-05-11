import { Task } from '../models/Task.js'


export const getTasks = async (req, res) => {
  try {
    const { limit = 5, offset = 0 } = req.query
    const tasks = await Task.findAll({ offset: parseInt(offset), limit: parseInt(limit) })
    const total = await Task.count()
    res.status(200).json({
      tasks, total
    })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}

export const createTask = async (req, res) => {
  try {
    const { name, projectId } = req.body
    const newTask = await Task.create({ name, projectId })
    res.status(201).json(newTask)
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}

