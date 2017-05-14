export default (state = [], action) => {
  switch (action.type) {
    case 'COLLECT_ANIME': 
      console.log('COLLECT_ANIME')
      return state
    default:
      return state
  }
}