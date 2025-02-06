import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const Axios_Post = () => {
    const data = {fname:'' , lname:''}

    const [inputData , setInputData] = useState(data)

    const handleChange = (e) => {
        setInputData({...inputData , [e.target.name]:e.target.value})
        console.log(setInputData);
    }

    const handleSubmit  = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/Product',inputData)
        .then((res) =>{
            console.log(res);
        })
    }

    const handleUpadate  = (e) =>{
        e.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/todos/1',inputData)
        .then((res) =>{
            console.log(res);
        })
    }

    const handleDelete  = (e) =>{
        e.preventDefault()
        axios.delete('https://jsonplaceholder.typicode.com/todos/1',inputData)
        .then((res) =>{
            console.log(res);
        })
    }


  return (
    <div>
        <h1>Axios Post Request</h1>
            <label>FirstName</label>
            <input type="text" name="fname" value={inputData.fname} onChange={handleChange} className='bg-blue-100 py-[10px]'></input>
            <label>LastName</label>
            <input type="text" name="lname" value={inputData.lname} onChange={handleChange} className='bg-blue-100 py-[10px]'></input>
            <button onClick={handleSubmit} className='bg-green-400 px-[20px] py-[10px] border-2 border-black rounded-2xl me-[5px]'>Submit</button>
            <button onClick={handleUpadate} className='bg-blue-400 px-[20px] py-[10px] border-2 border-black rounded-2xl me-[5px]' >Update</button>
            <button onClick={handleDelete} className='bg-red-400 px-[20px] py-[10px] border-2 border-black rounded-2xl me-[5px] '>Delete</button>
    </div>
  )
}

export default Axios_Post
