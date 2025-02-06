import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <div>

      <span>
        Welcome To Emart Mr/Mrs {auth.user}
      </span><br/>
      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Profile
