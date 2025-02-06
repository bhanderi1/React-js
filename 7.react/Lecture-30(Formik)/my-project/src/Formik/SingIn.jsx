import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Home from './Home';

const SignIn = () => {
    const [showHome, setShowHome] = useState(false);
    const [localEmail, setLocalEmail] = useState(localStorage.getItem('email') || '');
    const [localPassword, setLocalPassword] = useState(localStorage.getItem('password') || '');

    useEffect(() => {
        const localSignup = localStorage.getItem('signUp');
        if (localSignup) {
            setShowHome(true);
        }
    }, []);

    const handleSignIn = (values) => {
        if (values.email === localEmail && values.password === localPassword) {
            localStorage.setItem('signUp', values.email);
            window.location.reload();
        } else {
            alert('Please enter valid credentials');
        }
    };

    const handleSignUp = (values) => {
        localStorage.setItem('name', values.name);
        localStorage.setItem('email', values.email);
        localStorage.setItem('password', values.password);
        localStorage.setItem('signUp', values.email);
        alert('Account successfully created!');
        window.location.reload();
    };

    return (
        <div>
            {showHome ? (
                <Home />
            ) : (
                <div className='flex h-screen bg-gray-400 justify-center items-center'>
                    <div className='bg-pink-500 p-12 border-4 border-solid border-black'>
                        <Formik
                            initialValues={{ name: '', email: '', password: '' }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                }
                                if (!values.password) {
                                    errors.password = 'Required';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                if (localEmail) {
                                    handleSignIn(values);
                                } else {
                                    handleSignUp(values);
                                }
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    {!localEmail && (
                                        <div className='mt-4'>
                                            <Field className='p-2' type='text' name='name' placeholder='Name' />
                                        </div>
                                    )}
                                    <div className='mt-4'>
                                        <Field className='p-2' type='email' name='email' placeholder='Email' />
                                        <ErrorMessage name='email'  className='text-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <Field className='p-2' type='password' name='password' placeholder='Password' />
                                        <ErrorMessage name='password'  className='text-red-600' />
                                    </div>
                                    <button
                                        className='bg-gray-600 w-full mt-4 text-white border-white border-2 py-[10px] font-bold hover:border-2 hover:border-solid hover:border-black hover:text-black hover:bg-blue-200'
                                        type='submit'
                                        disabled={isSubmitting}
                                    >
                                        {localEmail ? 'Sign In' : 'Sign Up'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignIn;