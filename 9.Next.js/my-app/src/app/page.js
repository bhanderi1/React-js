'use client'
import { useState } from "react"

export default function Home() {
  const [ counter , setcounter] = useState(0)
  const [initialCount , setInitialCount] = useState(0)

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
    <>
    <div className="p-[10px]">
      <span className="border-[1px] border-black py-[10px]">
        <button onClick={decrement} className="px-[15px]" >-</button>
        <span>{counter}</span>
        <button onClick={increment} className="px-[15px]">+</button>
      </span>
    <button onClick={handleReset} className="border-[1px] border-black p-[8px] bg-purple-600 text-white">Reset</button>
    </div>
    </>
  );
}
