import React, { use, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Component/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading, } = use(AuthContext);
    const location = useLocation();
    // console.log(loading, user, location);


    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return (
            children
        );
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>

};

export default PrivateRoute;