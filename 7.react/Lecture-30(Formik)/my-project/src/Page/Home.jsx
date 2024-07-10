import React from 'react'

const Home = () => {

    const logout = () => {
        localStorage.removeItem('signUp')
        window.location.reload()
    }

    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome {localStorage.getItem('name')}</p>
      <button className='bg-green-200 px-[30px] py-[10px] me-[10px]' onClick={logout}>Logout</button>
      <button className='bg-red-500 px-[30px] py-[10px] me-[10px]' onClick={deleteAccount}>Delete</button>
    </div>
  )
}

export default Home