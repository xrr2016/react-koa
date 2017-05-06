import Sequelize from 'sequelize'
import { table, username, password } from '../config/index'

export const connection = new Sequelize(table, username, password, {
  host: 'localhost',
  dialect: 'mysql'
}) 

export const Anime = connection.define('anime', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: '这里是一个懒惰的简介...'
  },
  thumbnail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
    type: Sequelize.STRING
  },
  likes: {
    type: Sequelize.FLOAT,
    defaultValue: 0.0
  }
}, {
  timestamps: true
}) 
