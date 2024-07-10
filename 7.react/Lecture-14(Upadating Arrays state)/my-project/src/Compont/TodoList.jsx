import React from 'react'
import { useState } from 'react'

const TodoList = (props) => {


  return (
    <div className='my-1'>
      <li className='flex justify-between '>
        {props.item}
        <div className='my-2'>
        <button className='bg-red-500 rounded-xl text-white p-2 px-3 ' onClick={e => {
          props.deleteItem(props.index)
        }}>Delete</button>

    
        <button className='bg-green-500 rounded-xl text-white p-2 px-3 me-2' onClick={e => {
          props.editItem(props.item)
        }}>Edit</button>
        </div>
      </li>
    </div>
  )
}

export default TodoList
