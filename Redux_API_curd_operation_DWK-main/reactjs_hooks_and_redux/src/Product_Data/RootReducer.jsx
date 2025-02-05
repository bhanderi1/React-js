import { combineReducers } from 'redux'
import CountryReducer from './Reducer'
import userReducer from './ServicCode/ServiceCode_Reducer'

const RootReducer = combineReducers({
    CountryReducer,
    // Servic Code API
    userReducer
})

export default RootReducer