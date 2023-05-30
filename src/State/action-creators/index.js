export const setIsOpen = (isOpen) => {
    return (dispatch) => {
        dispatch({ type: 'SET_ISOPEN', payload: isOpen })
    }
}

export const setIncomeOpen = (isIncOpen) => {
    return (dispatch) => {
        dispatch({ type: 'SET_INCOPEN', payload: isIncOpen })
    }
}

export const setEdit = (isEdit) => {
    return (dispatch) => {
        dispatch({ type: 'SET_EDIT', payload: isEdit })
    }
}

export const setExpense = (selectedExpense) => {
    return (dispatch) => {
        dispatch({ type: 'SET_EXPENSE', payload: selectedExpense })
    }
}

export const setEditIncome = (isEdit) => {
    return (dispatch) => {
        dispatch({ type: 'SET_EDITINCOME', payload: isEdit })
    }
}

export const setIncome = (selectedIncome) => {
    return (dispatch) => {
        dispatch({ type: 'SET_INCOME', payload: selectedIncome })
    }
}

export const categoryChart = (catChart) => {
    return (dispatch) => {
        dispatch({ type: 'SET_CATCHART', payload: catChart })
    }
}

export const paymentModeChart = (payChart) => {
    return (dispatch) => {
        dispatch({ type: 'SET_PAYCHART', payload: payChart })
    }
} 