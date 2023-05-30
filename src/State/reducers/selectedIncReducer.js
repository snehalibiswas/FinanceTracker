const reducer = (state = {}, action) => {
    if (action.type === 'SET_INCOME') {
        return action.payload
    } else {
        return state
    }
}

export default reducer