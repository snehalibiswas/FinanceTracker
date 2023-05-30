const reducer = (state = false , action) => {
    if(action.type === 'SET_INCOPEN') {
        return action.payload
    } else {
        return state
    }
}

export default reducer