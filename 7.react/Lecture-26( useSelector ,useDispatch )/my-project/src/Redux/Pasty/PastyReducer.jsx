import { BUY_PASTY } from "./PastyConstant"

const initialState ={
    numOfPasty : 10
}

const PastyReducer = (state  = initialState , action) =>{
    switch(action.type){
        case BUY_PASTY :return {
            ...state,
            numOfPasty:state.numOfPasty - 1
        }

        default: return state
}
}
export default PastyReducer