// Service Code API

import { LOGIN, REGISTER } from "../Constant";

export const register = (data)=>{
    return{
        type:REGISTER,
        data
    }
}

export const login = (data)=>{
    return{
        type:LOGIN,
        data
    }
}