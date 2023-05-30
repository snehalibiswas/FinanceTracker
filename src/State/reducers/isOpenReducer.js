const reducer = (state = false , action) => {
    if(action.type === 'SET_ISOPEN') {
        return action.payload
    } else {
        return state
    }
}

export default reducer