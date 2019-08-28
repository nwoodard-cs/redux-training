import C from '../constants'

export const goal = (state, action) => {
  if (action.type === C.SET_GOAL) {
    return action.payload
  } else {
    return state
  }
}
