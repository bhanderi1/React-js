import { combineReducers } from 'redux';
import countryReducer from './Reducer'; // Renamed for clarity

const RootReducer = combineReducers({
  country: countryReducer, // Make sure state names are clear
});

export default RootReducer;
