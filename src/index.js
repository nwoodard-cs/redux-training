import C from './constants'
import { allSkiDays } from './store/reducers'

const state = [
  {
    "resort": "Kirkwood",
    "date": "2017-10-1",
    "powder": false,
    "backcountry": true
  },
  {
    "resort": "Heavenly",
    "date": "2018-10-13",
    "powder": true,
    "backcountry": false
  }
]

const action = {
  type: C.REMOVE_DAY,
  payload: "2018-10-13"
}

const nextState = allSkiDays(state, action)

console.log(`
  Initial state: ${state}  
  Action: ${JSON.stringify(action)}
  New state: ${JSON.stringify(nextState)}
`)
