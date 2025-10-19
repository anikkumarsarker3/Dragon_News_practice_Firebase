import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import userPic from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const [dure, setDure] = useState(true);
    const { user, logOut, loading } = use(AuthContext);

    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) => isActive ? 'underline' : ''}>About</NavLink></li>
        <li><NavLink to='career' className={({ isActive }) => isActive ? 'underline' : ''}>Career</NavLink></li>
    </>
    return (
        <div className='flex justify-between items-center my-3 z-1'>
            <div className='text-blue-700 font-bold'>{user && user?.email}</div>
            <div>
                <ul className='flex gap-3 text-accent'>
                    {links}
                </ul>
            </div>
            {
                loading ? '' : <div className="flex items-center justify-center gap-1.5">
                    <img className='w-10 rounded-full' src={user ? user.photoURL : userPic} alt="" />
                    <Link to='/auth/login' className={`text-base-100 btn-primary btn ${user ? 'hidden' : ''}`}>Login</Link>
                    <Link onClick={() => setDure(!dure)} to='' className={`text-base-100 btn-primary btn ${user ? '' : 'hidden'}`}>{user?.displayName}</Link>
                    {
                        !dure ?
                            <div className='relative'>
                                <div onClick={() => { logOut(), setDure(!dure) }} className={`absolute top-5 right-10  ${dure ? 'hidden' : ''} z-50`}>
                                    <Link className={`text-base-100 bg-red-500 btn`}>LogOut</Link>
                                </div>
                            </div> : ''
                    }

                    {/* <div className='relative'>
                    {
                        user ? <Link onClick={() => setDure(!dure)} className={`text-base-100 btn-primary btn`}>{user?.displayName}</Link> : ''
                    }


                    <div onClick={() => { logOut(), setDure(!dure) }} className={`absolute  ${dure ? 'hidden' : ''} transition-transform duration-1000 ease-in-out cursor-pointer z-50`}>
                        <Link className={`text-base-100 bg-red-500 btn`}>LogOut</Link>
                    </div>
                </div> */}
                </div>
            }

        </div>
    );
};

export default Navbar;