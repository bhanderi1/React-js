import React, { useState } from 'react'

/*Upadating Arrays in state */

const Update_array = () => {
    const[name ,setName] = useState("  ")
    const[Profile , setProfile] = useState([])

    console.log(name);
    console.log(Profile);

    let Ids = 0;

  return (
    <div>
      <input className='p-2 border-2 border-solid border-black me-5' value={name} onChange={(e) => setName(e.target.value)} />
      <button className='bg-blue-500 px-8 p-3 text-white rounded-2xl' onClick={() => setProfile([...Profile , {
        id: Ids++,
        name:name 
      }])}>submit</button>

      <ul>
        {
            Profile.map((data) => (
            <div className='flex my-5'>
              <li key={data.id} > {data.name}</li>
              <button className='bg-green-500 px-8 py-1 ms-5'>Edit</button>
              <button className='bg-red-500 px-8 py-1 ms-2'>Delete</button>
 </div>)
          )
        }
      </ul>
    </div>
  )
}

export default Update_array

/**Frist Input List Search History after submit remove*/

/*Print with list item delete and edit button */

/*after write list value  update and value delete*/