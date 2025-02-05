import React, { useState } from 'react'

const Login = () => {
    // const [inputvalue, setInputValue] = useState({
    //     email:"",
    //     password:""
    // })
    // console.log(inputvalue);

//    const ohandleSubmit = values =>{
//     console.log("onsubmit" , values);
//    }

//      const handleInput= (e)=>{
//         setInputValue({...inputvalue, [e.target.name]: e.target.value});
// }

const [email ,setEmail] = useState('')
const [password ,setcPassword]= useState('')

const handleSubmit = (e)=>{
    e.preventDefault();
    let formdata = new FormData()

    formdata.append('email', email)
    formdata.append('password', password)

    console.log("FormData", [...formdata]);
    
}

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Email:-</label>
            <input type='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        </div>
        <div>
            <label>Password:-</label>
            <input type='text' name='password' value={password} onChange={(e)=> setcPassword(e.target.value)}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
