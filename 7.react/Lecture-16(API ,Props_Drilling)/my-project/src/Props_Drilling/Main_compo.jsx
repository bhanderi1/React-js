import React from 'react'
import Comp_A from './Comp_A'

const Main_compo = () => {

    const name = "skillQode"

  return (
    <div>
      <h1>This is component Main</h1>
      <Comp_A  name={name}/>
    </div>
  )
}

export default Main_compo
