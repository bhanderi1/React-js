import React, { useState } from 'react'

const Bg_changer = () => {
    const [color ,setcolor] = useState("olive")
    return (
        <div className='w-full h-screen duration-200'
        style={{backgroundColor : color}}
        >
         <div className='fixed flex flex-wrap justify-center bottom-12 inxet-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          onClick={()=>setcolor("red")}
           style={{backgroundColor :"red"}}>Red</button></div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          onClick={()=>setcolor("green")} style={{backgroundColor :"green"}}>Green</button></div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          onClick={()=>setcolor("blue")} style={{backgroundColor :"blue"}}>blue</button></div>
         </div>
        </div>
    )
}

export default Bg_changer
