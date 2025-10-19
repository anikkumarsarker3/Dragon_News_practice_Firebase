import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const SingnUp = () => {
    const { createuser, addOthers, setUser } = use(AuthContext);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const term = e.target.term.checked;
        setErrMsg('');


        const profile = {
            displayName: name,
            photoURL: photo,
        }
        // console.log(name, photo, email, password, term);

        if (name.length < 5) {
            setErrMsg('Name minimum length of 5 characters');
            return;
        }
        else if (!term) {
            setErrMsg('Please Accept Conditions');
            return;
        }
        createuser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user)
                setUser(user);
                addOthers(profile);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setErrMsg(errorCode);

            })

    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mt-10 mx-auto bg-base-200 shadow-md">
            <h1 className="text-2xl font-bold text-center">Register your account</h1>
            <form onSubmit={handleRegisterSubmit}>
                <div className="space-y-1">
                    <label className=''>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your Name" className="w-full px-4 py-3 rounded-md border bg-gray-300 border-gray-300 my-2" required />
                </div>
                <div className="space-y-1">
                    <label className=''>Photo URL</label>
                    <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border bg-gray-300 border-gray-300 my-2" required />
                </div>
                <div className="space-y-1">
                    <label className=''>Email address</label>
                    <input type="email" name="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-md border bg-gray-300 border-gray-300 my-2" required />
                </div>
                <div className="space-y-1">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border bg-gray-300 border-gray-300 my-2" required />
                </div>
                <div className="space-y-1 ">
                    <input type="checkbox" name="term" /> <span>Accept Term & Conditions</span>
                </div>
                <button type='submit' className="cursor-pointer block w-full p-3 text-center rounded-sm bg-gray-900 text-white my-3">Register</button>
            </form>
            {
                errMsg ? <p className='text-red-500 my-2'>{errMsg}</p> : ''
            }

            <p className="text-center sm:px-6 dark:text-gray-600">All Ready have an account?
                <Link to='/auth/login' href="#" className="underline text-gray-800">Login</Link>
            </p>
        </div>
    );
};

export default SingnUp;