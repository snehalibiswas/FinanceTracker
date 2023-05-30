import { combineReducers } from "redux";
import isOpenReducer from './isOpenReducer'
import isIncOpenReducer from './isIncOpenReducer'
import isEditReducer from './isEditReducer'
import selectedExpReducer from './selectedExpReducer'
import isEditIncomeReducer from './isEditIncomeReducer'
import selectedIncReducer from './selectedIncReducer'
import catChartReducer from './catChartReducer'
import payChartReducer from './payChartReducer'

const reducers = combineReducers({
    isOpen: isOpenReducer,
    isIncOpen: isIncOpenReducer,
    isEdit: isEditReducer,
    selExp : selectedExpReducer,
    isEditInc : isEditIncomeReducer,
    selInc : selectedIncReducer,
    catChart : catChartReducer,
    payChart : payChartReducer,
})

export default reducers