import React from 'react'
/*Usestate Hook */
import { useState } from 'react'


const Use_state = () => {
    const [date, setDate] = useState(0)

    function Increment() {
      setDate(date + 1);
    }

    function Decrement() {
        setDate(date - 1);
      }

    return (
        <div>
            <div>{date}</div>
            <button className='bg-green-500 p-2 text-white' onClick={Increment}>+</button>
            <button className='bg-green-500 p-2 text-white' onClick={Decrement}>-</button>
        </div>
    )
}
export default Use_state
