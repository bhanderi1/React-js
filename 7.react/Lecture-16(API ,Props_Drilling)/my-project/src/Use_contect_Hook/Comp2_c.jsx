import React, { useContext } from 'react'
import {data ,data1} from './Main1_compo'

const Comp2_c = () => {
  const name = useContext(data)
  const age =useContext(data1)
  return (
    <div>
      <h1>This is component C {name} And Age {age}</h1>
    </div>
  )
}

export default Comp2_c
