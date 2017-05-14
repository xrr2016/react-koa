import { COLLECT_ANIME } from './action_types'

export const collectAnime = (anime = {}) => {
  return {
    type: COLLECT_ANIME,
    anime
  }
}