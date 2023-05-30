const reducer = (state = false, action) => {
    if (action.type === 'SET_EDIT') {
        return action.payload
    } else {
        return state
    }
}

export default reducer