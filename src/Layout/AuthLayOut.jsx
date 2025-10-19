import React from 'react';
import Navbar from '../Component/Navbar';
import Login from '../Pages/Login';
import { Outlet } from 'react-router';

const AuthLayOut = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <div className='h-screen flex justify-center items-center pt-7'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayOut;