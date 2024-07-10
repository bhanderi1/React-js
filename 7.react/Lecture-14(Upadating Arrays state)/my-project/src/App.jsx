import React, { useState } from 'react'
import Todo_input from './Compont/Todo_input'
import TodoList from './Compont/TodoList'



// import Update_array from './Update_array'


const App = () => {
  const [ListTodo, setListTodo] = useState([])
  

  let addList = (inputText) => {
    if(inputText!=='')
    setListTodo([...ListTodo, inputText])
  }

  const  deleteListItem =(key)=>{
    let newListTodo = [...ListTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  
 const editListItem = (nexttodo) =>{
  let editTodo = [...nexttodo]
  setListTodo([...editTodo])
 }

  return (
    <div className='continer flex justify-center h-[100vh]' >
      {/* <Update_array/> */}

      <div>
        <Todo_input addList={addList} />
        <h1 className='font-bold text-2xl py-3'> Todo </h1>
        <hr />
        {ListTodo.map((ListItem, i) => {
          return (
            <TodoList key={i} item={ListItem}  deleteItem={deleteListItem} editItem={editListItem}
            />
          )
        })}
        </div>
    </div>
  )
}

export default App
