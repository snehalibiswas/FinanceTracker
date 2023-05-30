const reducer = (state = {}, action) => {
    if (action.type === 'SET_EXPENSE') {
        return action.payload
    } else {
        return state
    }
}

export default reducer