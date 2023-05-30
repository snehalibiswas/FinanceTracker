const reducer = (state = false, action) => {
    if (action.type === 'SET_EDITINCOME') {
        return action.payload
    } else {
        return state
    }
}

export default reducer