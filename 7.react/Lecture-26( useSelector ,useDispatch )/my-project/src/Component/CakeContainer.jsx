import React from 'react'
import { buy_cake } from '../Redux'
import {useSelector , useDispatch} from 'react-redux'



/* useSelector  / useDispatch */

const CakeContainer = () => {
  const numOfCake = useSelector(state => state.cake.numOfCake)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>NumOfCakes:{numOfCake}</h1>
      <button className="bg-red-500 px-[30px] py-[7px] text-white font-bold text-[18px] my-[10px]" onClick={() => dispatch(buy_cake())} >click</button>
    </div> 
  )
}

export default CakeContainer
