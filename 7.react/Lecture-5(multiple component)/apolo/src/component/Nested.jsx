import React from 'react'

// export function Button(){
//     return(
//     <>
//     <button className='bg-purple-500 px-12 py-2 border-solid border-black border-2'>Click me</button>
//     </>
//     )
// }

export const Button1 = () =>{
    return(
    <>
    <button className='bg-purple-500 px-12 py-2 border-solid border-black border-2'>Click me</button>
    </>
    )
}
export const Button2 = () =>{
    return(
    <>
    <button className='bg-red-500 px-12 py-2 border-solid border-black border-2'>Click me</button>
    </>
    )
}
export const Button3 = () =>{
    return(
    <>
    <button className='bg-black-500 px-12 py-2 border-solid border-black border-2'>Click me</button>
    </>
    )
}
export const Button4 = () =>{
    return(
    <>
    <button className='bg-green-500 px-12 py-2 border-solid border-black border-2'>Click me</button>
    </>
    )
}
const Nested = () => {
  return (
    <div>
      <Button1/>
      <Button2/>
      <Button3/>
      <Button4/>
     
    </div>
  )
}

export default Nested
