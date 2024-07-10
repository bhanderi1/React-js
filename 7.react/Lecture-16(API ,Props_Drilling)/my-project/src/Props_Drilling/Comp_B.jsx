import React from 'react'
import Comp_c from './Comp_c'

const Comp_B = ({name}) => {
  return (
    <div>
            <h1>This is component B {name}</h1>
            <Comp_c name={name}/>
    </div>
  )
}

export default Comp_B
