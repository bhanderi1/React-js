import React from 'react'
import Com2_A from './Com2_B'
import { createContext } from 'react'

const Main_compo2 = () => {
  const data = createContext()
  const data1 = createContext()

  const name = "srushti"
  const age = "21"
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={age}>

          <h1>This is component Main</h1>
          <Com2_A />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Main_compo2
