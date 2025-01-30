import { COUNTRY_DATA, COUNTRY_SET } from './Constant';

const initialState = [];

const countryReducer = (data = initialState, action) => {
  switch (action.type) {
    case COUNTRY_DATA:
      console.log('COUNTRY_DATA condition:', action);
      localStorage.setItem('Country List', JSON.stringify(action.data));
      return [...action.data];

    case COUNTRY_SET:
      console.log('COUNTRY_SET condition:', action);
      localStorage.setItem('Country List', JSON.stringify(action.data));
      return [...action.data];

    default:
      return data;
  }
};

export default countryReducer;
