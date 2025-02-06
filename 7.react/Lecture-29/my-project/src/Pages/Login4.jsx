import React from 'react'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'


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

const Login4 = () => {
    return (
        <div>
            <h1>Login Page 4</h1>
            <div className='h-screen flex justify-center items-center bg-gray-300 '>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form className='bg-pink-300 p-[40px]'>
                        <div className='mb-[15px]'>
                            <label htmlFor='firstname' >FristName</label><br />
                            <Field type="text" name="firstname" id="fristname" /><br/>
                            <ErrorMessage name='firstname'></ErrorMessage>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor='lastname' >LastName</label><br />
                            <Field type="text" name="lastname" id="lastname"  /><br/>
                            <ErrorMessage name='lastname'></ErrorMessage>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor='email'>E-mail</label><br />
                            <Field type="email" name='email' id='email'  /><br/>
                            <ErrorMessage name='email'></ErrorMessage>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor='password'>Password</label><br />
                            <Field type="password" name='password' id='password' />
                            <ErrorMessage name='password'></ErrorMessage>

                        </div>
                        <button type='submit' className='text-white bg-blue-500 p-[10px] px-[20px]'>Submit</button>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}

export default Login4
