import React from 'react'
import { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 
    const [user ,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handelLogin = ()=>{
        auth.login(user)
        navigate('/profile')
    }


  return (
    <div>
        <label htmlFor="UserName">UserName</label>
      <input type="text" onChange={(e)=> setUser(e.target.value)}/><br/>
      <button onClick={handelLogin}>Login</button>
    </div>
  )
}

export default Login
