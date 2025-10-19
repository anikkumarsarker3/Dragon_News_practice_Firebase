import React from 'react';
import Fb from '../assets/fb.png'
import Instra from '../assets/instagram.png'
import Twit from '../assets/twitter.png'

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mb-4'>Find Us On</h1>
            <div className='text-center'>
                <button className="btn bg-white w-full mt-1 text-black border-[#e5e5e5]">
                    <img src={Fb} alt="" />
                    Facbook
                </button>
                <button className="btn bg-white w-full mt-1 text-black border-[#e5e5e5]">
                    <img src={Instra} alt="" />
                    Instragram
                </button>
                <button className="btn bg-white w-full mt-1 text-black border-[#e5e5e5]">
                    <img src={Twit} alt="" />
                    Twitter
                </button>
            </div>

        </div>
    );
};

export default FindUs;