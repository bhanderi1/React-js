import { COUNTRY_DATA, COUNTRY_SET_DATA, COUNTRY_CATEGORY_SET_DATA, COUNTRY_CATEGORY_DATA } from "./Constant";


const CountryReducer = (data = [], action) => {
    switch (action.type) {
        // case COUNTRY_DATA:
        //     console.log('COUNTRY DATA condition action', action);
        //     localStorage.setItem('country List hello', JSON.stringify(action.data))
        //     return [...action.data];

        case COUNTRY_SET_DATA:
            console.log('COUNTRY SET DATA condition', action.data.data);
            localStorage.setItem('country List', JSON.stringify(action.data.data))
            return [...action.data.data]

        // case COUNTRY_CATEGORY_DATA:
        //     console.log('COUNTRY CATEGORY DATA condition action', action);
        //     localStorage.setItem('country category List hello', JSON.stringify(action.data))
        //     return [...action.data];

        case COUNTRY_CATEGORY_SET_DATA:
            console.log('COUNTRY category DATA condition', action.data.data);
            localStorage.setItem('country category List', JSON.stringify(action.data.data))
            return [...action.data.data];

        default:
            return data;
    }
}

export default CountryReducer;