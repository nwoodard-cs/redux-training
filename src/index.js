import C from './constants'
import storeFactory from './store'
import { addDay, removeDay, setGoal } from './actions'
const store = storeFactory()

const state = store.getState()

store.dispatch(addDay('Heavenly', '2019-12-1'))

store.dispatch(removeDay('2019-12-1'))

store.dispatch(setGoal(55))
