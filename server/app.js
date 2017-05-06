import Koa from 'koa'
import Sequelize from 'sequelize'
import router from './router/index'
import { port } from './config/index'

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'Hello World!'
  await next()
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log(`App listening on ${port}`)
})

export default app