// Service Code API

import { REGISTER, USER_REGISTER ,LOGIN} from "../Constant";

const initialState =[]

const userReducer = (data = [],action)=>{
    switch(action.type){
        case REGISTER:
            console.log("USER REGISTER DATA",action);
            localStorage.setItem('User Register List',JSON.stringify(action.data));
            return [...action.data]

        case USER_REGISTER:
            console.log('REGISTER DATA',action.data.data);
            localStorage.setItem('Register data',JSON.stringify(action.data.data))
            return [...action.data]

            case LOGIN:
                console.log("USER REGISTER DATA", action);
                localStorage.setItem('User Register List', JSON.stringify(action.data));
                return [...action.data]

     default:
        return data;       
    }
}

export default userReducer