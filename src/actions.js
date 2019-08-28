import C from './constants'

export function addDay(resort, date, powder=false, backcountry=false) {
	return {
		type: C.ADD_DAY,
		payload: {resort,date,powder,backcountry}
	}
}

export const removeDay = function(date) {
	return {
		type: C.REMOVE_DAY,
		payload: date
	}
}

export const setGoal = (goal) => 
	({
		type: C.SET_GOAL,
		payload: goal
	})

export const addError = (message) =>
	({
		type: C.ADD_ERROR,
		payload: message
	})

export const clearError = (idx)  => 
	({
		type: C.CLEAR_ERROR,
		payload: idx
	})

export const changeSuggestions = (suggestions) => 
	({
		type: C.CHANGE_SUGGESTIONS,
		payload: suggestions
	})

	export const clearSuggestions = () => 
	({
		type: C.CHANGE_SUGGESTIONS,
		payload: []
	})
