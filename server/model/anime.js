import Sequelize from 'sequelize'
import { db } from '../config/index'

const connection = new Sequelize(db.schema, db.username, db.password, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

const Anime = connection.define(
  'anime',
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
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
  },
  {
    timestamps: true
  }
)

export default Anime