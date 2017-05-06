import Router from 'koa-router'
import anime from './anime'

const router = new Router()

router.use('/anime', anime.routes(), anime.allowedMethods())

export default router