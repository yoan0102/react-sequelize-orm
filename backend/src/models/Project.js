import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'
import { Task } from './Task.js'

export const Project = sequelize.define('projects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
})

Project.hasMany(Task, {
  foreingKey: 'projectId',
  sourceKey: 'id'
})

Task.belongsTo(Project, {
  foreingKey: 'projectId',
  targetId: 'id'
})