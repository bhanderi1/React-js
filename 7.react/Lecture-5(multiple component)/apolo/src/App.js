import React from 'react'
import Nested from './component/Nested'
import Card from './component/Card'
import TodoList from './component/Task'
import TodoList1 from './component/Task-1'
import TodoList2 from './component/Task-2'

const App = () => {
  return (
    <div>
      <div>
        <Nested />
        <Card/>
        <TodoList/>
        <TodoList1/>
        <TodoList2/>
      </div>
    </div>
  )
}

export default App



