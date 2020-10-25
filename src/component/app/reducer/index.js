import * as dispatcher from '../dispatch'

const reducer = (state, action) => {
  if (!dispatcher[action.type])
    return state
  return dispatcher[action.type](state, action)
}

export default reducer 