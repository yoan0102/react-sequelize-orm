import Sequelize from 'sequelize'

export const sequelize = new Sequelize('projectsdb', 'postgres', 'meli*0102', {
  host: 'localhost',
  dialect: 'postgres',
})