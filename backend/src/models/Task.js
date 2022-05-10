import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Task = sequelize.define('tasks', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }

}, {
  timestamps: false
})

