import { COUNTRY_CATEGORY_DATA, COUNTRY_DATA } from "./Constant";

export const country_data = (data)=>{
    return{
        type:COUNTRY_DATA,
        data
    }
}

export const country_category_data =(data)=>{
    return{
        type:COUNTRY_CATEGORY_DATA,
        data
    }
}


