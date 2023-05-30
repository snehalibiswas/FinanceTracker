const reducer = (state = [], action) => {
    if (action.type === 'SET_CATCHART') {
        return action.payload
    } else {
        return state
    }
}

export default reducer