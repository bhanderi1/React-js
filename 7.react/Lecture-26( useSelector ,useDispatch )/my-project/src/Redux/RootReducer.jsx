import CakeReducer from './Cake/CakeReducer'
import PastyReducer from './Pasty/PastyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    cake:CakeReducer,
    pasty:PastyReducer
})

export default rootReducer