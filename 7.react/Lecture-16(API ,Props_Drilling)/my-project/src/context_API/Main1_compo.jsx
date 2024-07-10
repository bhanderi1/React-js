import React from 'react'
import Comp1_A from './Comp1_A'
import { createContext } from 'react'

const data= createContext()
const data1= createContext()
const Main1_compo = () => {

  const name= "srushti"
  const age = "21"
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={age}>

         <h1>This is component Main</h1>
         <Comp1_A/>
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Main1_compo
export {data,data1}
