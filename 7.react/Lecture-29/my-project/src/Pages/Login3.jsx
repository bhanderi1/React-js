import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}


const onSubmit = values => {
    console.log('form data', values);
}

    const validationSchema = yup.object({
    firstname: yup.string().required("required"),
    lastname: yup.string().required("required"),
    email: yup.string().email('invalid addres').required("required"),
    password: yup.string().required("required"),
})

const Login3 = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log('formikdata', formik.values);
    console.log('form error', formik.errors);
    console.log('form blur', formik.touched);


    return (
        <div>
        <h1>Login Page 3</h1>
        <div className='h-screen flex justify-center items-center bg-gray-300 '>

            <form onSubmit={formik.handleSubmit} className='bg-pink-300 p-[40px]'>
                <div className='mb-[15px]'>
                    <label htmlFor='firstname' >FristName</label><br />
                    <input type="text" name="firstname" id="fristname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {
                        formik.touched.firstname && formik.errors.firstname ? <div className=''>{formik.errors.firstname}</div> : null
                    }
                </div>
                <div className='mb-[15px]'>
                    <label htmlFor='lastname' >LastName</label><br />
                    <input type="text" name="lastname" id="lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {
                        formik.touched.lastname &&  formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null
                    }
                </div>
                <div className='mb-[15px]'>
                    <label htmlFor='email'>E-mail</label><br />
                    <input type="email" name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {
                        formik.touched.email &&   formik.errors.email ? <div>{formik.errors.email}</div> : null
                    }
                </div>
                <div className='mb-[15px]'>
                    <label htmlFor='password'>Password</label><br />
                    <input type="password" name='password' id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {
                        formik.touched.password &&  formik.errors.password ? <div>{formik.errors.password}</div> : null
                    }

                </div>
                <button type='submit' className='text-white bg-blue-500 p-[10px] px-[20px]'>Submit</button>
            </form>
        </div>

    </div>
    )
}

export default Login3
