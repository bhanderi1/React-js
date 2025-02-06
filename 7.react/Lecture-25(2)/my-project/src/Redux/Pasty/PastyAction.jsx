import { BUY_PASTY } from "./PastyConstant"
import { ADD_PASTY } from "./PastyConstant"

export function buy_pasty(){
    return{
        type:BUY_PASTY,
    }
}

export function add_pasty(){
    return{
        type:ADD_PASTY
    }
}