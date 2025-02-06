// import rootReducer from "./rootReducer"
// const Store = createStore(rootReducer)
// export default Store

import { createStore } from "redux";
import CakeReducer from './Cake/CakeReducer'


const Store = createStore(CakeReducer)

export default Store