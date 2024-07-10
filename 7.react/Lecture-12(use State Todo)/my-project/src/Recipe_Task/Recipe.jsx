import React from 'react'
import { useState } from 'react'
import { Dishs } from './Dish'


const Recipe = () => {
  const [index, setIndex] = useState(0)
 
  const searchMeal = async (e) => {
    e.preventDefault()

  }

  const DishData = Dishs[index]
  return (
    <div>

      <div className='flex justify-center'>
        <input type="text" name="" id="" placeholder='Enter Dish Name...' className='border-2 border-black ps-3 pe-12'/>
        <button onClick={Prev} className='bg-black text-white px-10 ms-5 py-2' type='submit'>Search</button>
      </div>
      <div className='flex justify-center'>({index + 1} of {Dishs.length})</div>
      <div>
      <div className='flex justify-center'>
        <div className='container px-9'>
          <h1 className='text-5xl font-bold text-red-700 py-6 '>{DishData.Name}</h1>
         <p><h1 className='font-bold text-xl underline underline-offset-4 py-6'>Decription:-</h1>{DishData.description}</p>
         <div className='py-5'>
          <img src={DishData.Image} alt=""  />
         </div>
          <p><h1 className='font-bold text-xl underline underline-offset-4 py-4 '>Ingrediens:-</h1>{DishData.Ingrediens}</p>
          <p><h1 className='font-bold text-xl underline underline-offset-4 py-4'>Recipe:-</h1>{DishData.Recipe}</p>
            <h1 className='font-bold text-xl underline underline-offset-4 py-4'>Images:-</h1>
          <div className='flex py-5 justify-evenly'>
            <img src={DishData.Other_image_1} alt="" />
            <img src={DishData.Other_image_2} alt="" />
            <img src={DishData.Other_image_3} alt="" />
            <img src={DishData.Other_image_4} alt="" />
            <img src={DishData.Other_image_5} alt="" />
          </div>
        </div>

         </div>
      </div>
      </div>

  )
}

export default Recipe



// import React from 'react'
// import { useState , useEffect } from 'react'

// const Use_Effect_API = () => {

//     const [userList ,setUserList] = useState([])


//     useEffect (()=>{
//         fetch('https://fakestoreapiserver.reactbd.com/walmart')
//         .then((res) => res.json())        
//         .then((json) => setUserList(json))        
//     }, [])

//   return (
//     <div>
//       <table>
//         <tr>
//             {
//                 userList.map((item) =>
//                 (
//                   <>
//                 <div>
//                     {item._id}
//                 </div>
//                   </>
//                 ))
// }
//         </tr>
//       </table>
//     </div>
//   )
// }

// export default Use_Effect_API

// /**
//  1.Task :- display 20 product with img in card view using useEffect
//  2.display to-Do List with useEffect Hooks
//  */