// react Redux  = Javascript -> Actiohn -> Reducer -> Sate

const redux = require('redux')
const createStore = redux.createStore

/* constant */

const BUY_ICECREAME = 'BUY_ICECREAME'
const BUY_CHOCOLATE =  'BUY_CHOCOLATE'
const BUY_CHIPS = 'BUY_CHIPS'


function buy_icecreame(){
    return{
        type:BUY_ICECREAME,
        info:'Frist Redux Action'
    }
}
function buy_chocolate(){
    return{
        type:BUY_CHOCOLATE,
        info:'second Redux Action'
    }
}
function chips(){
    return{
        type:BUY_CHIPS,
        info:'three Redux Action'
    }
}

const initialState ={
    numOfIcecreame :20,
    numOfChocolate :10,
    numOfchips:5
}


const reducer = (state = initialState , action) =>{
    switch(action.type){
        case BUY_ICECREAME:return {...state, numOfIcecreame:state.numOfIcecreame-1}
        case BUY_CHOCOLATE:return{...state, numOfChocolate:state.numOfChocolate-1}   
        case BUY_CHIPS:return{...state ,numOfchips:state.numOfchips-1} 
        default:return state
    }

}

const store = createStore(reducer)
console.log('Initial State' , store.getState());
store.subscribe(()=>console.log('updated State' , store.getState()))
store.dispatch(buy_icecreame())
store.dispatch(buy_icecreame())
store.dispatch(buy_chocolate())
