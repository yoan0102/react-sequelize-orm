import { Task } from '../models/Task.js'


export const createTask = async (req, res) => {
  try {
    const { name, priority, description } = req.body
    const newTask = await Task.create({ name, priority, description })
    res.status(201).json(newTask)
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}

