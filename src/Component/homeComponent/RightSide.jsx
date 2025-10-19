import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../FindUs';
import QZone from '../QZone';
import { AuthContext } from '../../Provider/AuthProvider';

const RightSide = () => {
    const { user, loading } = use(AuthContext);
    return (
        <div>
            {
                loading ? <span className="loading loading-spinner loading-md"></span> : !user ? <SocialLogin></SocialLogin> : ''
            }
            {/* <SocialLogin></SocialLogin> */}
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightSide;