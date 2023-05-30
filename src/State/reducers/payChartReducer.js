const reducer = (state = [], action) => {
    if (action.type === 'SET_PAYCHART') {
        return action.payload
    } else {
        return state
    }
}

export default reducer