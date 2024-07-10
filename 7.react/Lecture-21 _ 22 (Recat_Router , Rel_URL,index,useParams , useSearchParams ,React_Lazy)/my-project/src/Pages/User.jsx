import React from 'react'
import {useSearchParams  , Outlet} from  'react-router-dom'


const User = () => {

    const [ searchParams , setSerachParams] = useSearchParams()

    const ActiveUser = searchParams.get('filter') === 'active'

  return (
    <>
    <div>
        <div>User 1</div>
        <div>User 2</div>
        <div>User 3</div>
    </div>
    <div>
       <button className='btn' onClick={() => setSerachParams({filter : 'active'})}>Active Users</button>
        <button  className="btn" onClick={() => setSerachParams({})}>All Users</button>
    </div>
    {
        ActiveUser ? <h1>Active User Only</h1> : <h1>All Users</h1>
    }
    </>
  )
}

export default User
