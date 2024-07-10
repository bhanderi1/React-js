import React from 'react'
import { buy_pasty } from '../Redux'
import {useSelector , useDispatch} from 'react-redux'



/* useSelector  / useDispatch */

const PastyContainer = () => {
  const numOfPasty = useSelector(state => state.pasty.numOfPasty)
  console.log(numOfPasty);
  const dispatch = useDispatch()


  return (
    <div>
      <h1>NumOfPasty:{numOfPasty}</h1>
      <button className="bg-red-500 px-[30px] py-[7px] text-white font-bold text-[18px] my-[10px]" onClick={() => dispatch(buy_pasty())} >click</button>
    </div>
  )
}

export default PastyContainer