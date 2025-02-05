import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useSelector, useDispatch } from "react-redux";
import { register } from '../Product_Data/ServicCode/ServiceCode_Action';
import { Link } from 'react-router-dom'

const Register = () => {
  // const initialValues = {
  //   firstName : '',
  //   LastName:'',
  //   email:'',
  //   password:'',
  //   confirme_password:'',
  //   modile_no:'',
  //   zipCode:'',
  //   address:''
  // }

  // const onsubmit = values =>{
  //   console.log('form Data',values);
  // }

  // const validationSchema = yup.object({
  //   firstName:yup.string().required("required"),
  //   LastName:yup.string().required("required"),
  //   email:yup.string().email('Invalid Address').required("required"),
  //   password:yup.string().required("required"),
  //   confirme_password:yup.string().required("required"),
  //   modile_no:yup.string().required("required"),
  // })
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.userReducer)
  console.log("User register page data",data);
  

  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [c_password, setcPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')

  //   const handleInput= (e)=>{
  //     setInputValue({...inputValue, [e.target.name]: e.target.value});
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData()

    formdata.append('user_firstname', firstname)
    formdata.append('user_lastname', lastname)
    formdata.append('user_email_id', email)
    formdata.append('user_password', password)
    formdata.append('user_confirm_password', c_password)
    formdata.append('mobile_no', mobile)
    formdata.append('address', address)
    formdata.append('zipCode', zipcode)
    console.log([...formdata]);

    dispatch(register([...formdata]))
  }
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>FirstName</label>
            <input type='text' name="firstName" value={firstname} onChange={(e) => setfirstname(e.target.value)} required></input>
          </div>
          <div>
            <label>LastName</label>
            <input type='text' name="lastName" value={lastname} onChange={(e) => setlastname(e.target.value)} ></input>
          </div>
          <div>
            <label>Email</label>
            <input type='email' name="email" value={email} onChange={(e) => setemail(e.target.value)} required></input>
          </div>
          <div>
            <label>Password</label>
            <input type='password' name="password" value={password} onChange={(e) => setpassword(e.target.value)} required></input>
          </div>
          <div>
            <label>confirme Password</label>
            <input type='password' name="confirme_password" value={c_password} onChange={(e) => setcPassword(e.target.value)} required></input>
          </div>
          <div>
            <label>Modile no</label>
            <input type='number' name="modile_no" value={mobile} onChange={(e) => setMobile(e.target.value)} required></input>
          </div>
          <div>
            <label>ZipCode</label>
            <input type='text' name="zipCode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} ></input>
          </div>
          <div>
            <label>Address</label>
            <input type='text' name="address" value={address} onChange={(e) => setAddress(e.target.value)} ></input>
          </div>

        </div>
        
        <button type='submit'>Submit</button>
      </form>
      {/* <div className='h-screen'>
                <Formik initialValues={initialValues} onSubmit={onsubmit} validationSchema={validationSchema}>
                    <Form className=''>
                        <div className='mb-[15px]'>
                            <label>FirstName</label>
                            <Field type="text" name="firstName" id="firstName" className="border-2 border-black" values=/>
                            <ErrorMessage name='firstName'></ErrorMessage>
                        </div>
                        <div className='mb-[15px]'>
                            <label>LastName</label>
                            <Field type="text" name="lastname" id="LastName" className="border-2 border-black"/>
                            <ErrorMessage name='LastName'></ErrorMessage>
                        </div>
                        <div className='mb-[15px]'>
                            <label>E-mail</label>
                            <Field type="email" name='email' id='email'  className="border-2 border-black"/>
                            <ErrorMessage name='email'></ErrorMessage>
                        </div>
                        <div className='mb-[15px]'>
                            <label>Password</label>
                            <Field type="password" name='password' id='password' className="border-2 border-black"/>
                            <ErrorMessage name='password'></ErrorMessage>
                        </div>
                        <div className='mb-[15px]'>
                            <label>Confirme Password</label>
                            <Field type="password" name='confirme_password' id='confirme_password' className="border-2 border-black"/>
                            <ErrorMessage name='confirme_password'></ErrorMessage>
                        </div>
                        <div className='mb-[15px]'>
                            <label>Mobile</label>
                            <Field type="number" name='mobile' id='mobile' className="border-2 border-black"/>
                            <ErrorMessage name='mobile'></ErrorMessage>
                        </div>
                        <div className='mb-[15px]'>
                            <label >Zipcode</label>
                            <Field type="text" name='zipcode' id='zipcode' className="border-2 border-black" />
                        </div>
                        <div className='mb-[15px]'>
                            <label>Address</label>
                            <Field type="text" name='address' id='address' className="border-2 border-black"/>
                        </div>
                        <button type='submit' className='text-white bg-blue-500 p-[10px] px-[20px]'>Submit</button>
                    </Form>
                </Formik>
            </div> */}

    </div>
  )
}

export default Register
