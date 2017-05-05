import Koa from 'koa'
import Sequelize from 'sequelize'
import { port } from './config/config'

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'Hello World!'
  await next() 
})

app.listen(port, () => {
  console.log(`App listening on ${port}`)
})

export default app