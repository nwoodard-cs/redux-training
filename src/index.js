import C from './constants'
import appReducer from './store/reducers'
import { createStore } from 'redux'

const initialState = (localStorage['redux-store']) ?
	JSON.parse(localStorage['redux-store']) : {}
	
const store = createStore(appReducer, initialState)

store.subscribe(() => console.log(JSON.stringify(store.getState())))
store.subscribe(() => {
	const state = JSON.stringify(store.getState())
	localStorage['redux-store'] = state
})

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		resort: 'Mt Shasta',
		date: '2019-1-12',
		powder: false,
		backcountry: true
	}
})

store.dispatch({
	type: C.SET_GOAL,
	payload: 12
})

