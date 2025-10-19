import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const { logIn, resetPassword } = use(AuthContext)

    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        logIn(email, password)
            .then(() => {
                toast("Login Successful");
                e.target.reset();
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(err => {
                setError(err.code);
            })


    }
    console.log(resetPassword)
    const emailRef = useRef(null);
    const handleForgetPass = (e) => {
        e.preventDefault()
        // console.log(emailRef.current.value)
        const email = emailRef.current.value
        console.log(email)
        resetPassword(email)
            .then((res) => {
                console.log(res)
                toast("Reset password Successful!! Please check your Email😎");
            })
    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mt-10 mx-auto bg-base-200 shadow-md">
            <h1 className="text-2xl font-bold text-center">Login your account</h1>
            <form onSubmit={handleLoginForm}>
                <div className="space-y-1">
                    <label className=''>Email address</label>
                    <input type="email" ref={emailRef} name="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-md border bg-gray-300 border-gray-300 my-2" />
                </div>
                <div className="space-y-1">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border bg-gray-300 border-gray-300 my-2" />
                    <div className="flex justify-end my-2">
                        <Link onClick={handleForgetPass}>Forgot Password?</Link>
                    </div>
                </div>
                <button type='submit' className="cursor-pointer block w-full p-3 text-center rounded-sm bg-gray-900 text-white">Login</button>
            </form>
            <div>
                {
                    error ? <p className='text-red-500'>{error}</p> : ''
                }
            </div>

            <p className="text-center sm:px-6 dark:text-gray-600">Don't have an account?
                <Link to='/auth/register' className="underline text-gray-800">Register</Link>
            </p>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </div>
    );
};

export default Login;