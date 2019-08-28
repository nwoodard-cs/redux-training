import C from './constants'
import { goal } from './store/reducers'

const state = 10

const action = {
  type: C.SET_GOAL,
  payload: 15
}

const nextState = goal(state, action)

console.log(`
  Initial goal: ${state}  
  Action: ${JSON.stringify(action)}
  New Goal: ${nextState}
`)
