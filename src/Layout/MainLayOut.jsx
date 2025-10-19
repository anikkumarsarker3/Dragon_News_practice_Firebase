import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftSide from '../Component/homeComponent/LeftSide';
import RightSide from '../Component/homeComponent/RightSide';
import Loader from '../Component/Loader';

const MainLayOut = () => {
    const { state } = useNavigation()
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3 flex justify-center'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>

            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <LeftSide></LeftSide>
                </aside>
                <div className="col-span-6">
                    {
                        state == 'loading' ? <Loader></Loader> : <Outlet></Outlet>
                    }

                </div>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <RightSide></RightSide>
                </aside>
            </main>


        </div>
    );
};

export default MainLayOut;