import Router from 'koa-router'
import shortid from 'shortid'
import Anime from '../model/anime'
import { animeData } from '../data'

const anime = new Router()

const test = {
  id: shortid.generate(),
  name: '疯味英雄',
  description: '《疯味英雄》讲述的是一个关于英雄的故事，在浩瀚无垠的多重宇宙中，隐藏着一不为人知的神秘位面，传奇英灵们化身为名字各异的英雄，活跃在这个扭曲翻转的混沌世界中。在这混沌的世界中，英雄们都似曾相识，又好像素味平生；英雄们在这世界中混混沌沌的活着，直到有天...',
  thumbnail: 'http://i0.hdslb.com/bfs/bangumi/c724c527ae410a9e9345fae51e75767c86869783.jpg_225x300.jpg',
  tags: ['热血', '奇幻', '战斗', '原创'],
  likes: 25.5
}

anime.get('/insertData', async (ctx, next) => {
  Anime.create(test)
       .then(res => {
         ctx.body = res
       })
  await next()
})

export default anime
