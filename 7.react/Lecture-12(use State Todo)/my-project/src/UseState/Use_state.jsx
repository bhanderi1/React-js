import React from 'react'
import { useState } from 'react'
const initialState = 10

const Use_state = () => {
    const [Age, setAge] = useState(initialState)

    function incrementAge(){
        setAge(Age+1)
        // setAge(Age => Age+1)
    }
  return (
    <div>
        <div className='btn p-4 mt-2  bg-red-300 w-20 text-white'>{Age}</div>
       <button className="btn mt-2 bg-red-300 p-4 text-white" onClick={incrementAge}>Add Age</button>
    </div>
  )
}

export default Use_state
