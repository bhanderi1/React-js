'use cilent'

import React from 'react'

const Page = () => {
    const [ counter , setcounter] = useState(0)
    const [initialCount , setInitialCount] = useState(0)

    const handleInitalCountChange = (event) =>{
        setInitialCount(Number(event.target.value))
    }

    const handleReset =()=>{
        setcounter(initialCount)
    }

    const increment = () =>{
        setcounter(counter+1)
    }

    const decrement =()=>{
        setcounter(counter-1)
    }

  return (
    <div>
      
    </div>
  )
}

export default Page
