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
export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findOne({
      where: {
        id
      },
    })
    res.json(task)
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

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { name, projectId, done } = req.body
    const task = await Task.findOne({
      where: { id },
    })
    task.set(req.body)
    await task.save()
    return res.status(200).json(task)
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const result = await Task.destroy({
      where: { id }
    })
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ msg: error.message })

  }
}
