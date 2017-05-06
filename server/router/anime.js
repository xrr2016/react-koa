import Router from 'koa-router'
import { Anime, connection } from '../model/index'
import { animeData } from '../data'

const anime = new Router()

anime.get('/insertData', async (ctx, next) => {
  const result = connection.sync({
    logging: console.log
  }).then(() => {
    return Anime.bulkCreate(animeData)
  })
  ctx.body = result
  await next()
})

export default anime