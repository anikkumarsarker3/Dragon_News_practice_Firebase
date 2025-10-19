import React from 'react';
import Swim from '../assets/swimming.png'
import Cls from '../assets/class.png'
import PlyG from '../assets/playground.png'
import Bg from '../assets/bg.png'

const QZone = () => {
    return (
        <div className='mt-9'>
            <h2 className='font-bold mb-2'>Q-Zone</h2>
            <div className='bg-base-200'>
                <img className='my-3 p-2' src={Swim} alt="" />
                <img className='my-3 p-2' src={Cls} alt="" />
                <img className='my-3 p-2' src={PlyG} alt="" />
            </div>

            <img className='mx-auto' src={Bg} alt="" />

        </div>
    );
};

export default QZone;