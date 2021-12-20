import React from 'react';
import { Navigate } from "react-router-dom";
import { useUserAuthentication } from '../context/authContext';

const Protector = (props: any) => {
    let { user } = useUserAuthentication();
    if (!user) {
        return <Navigate to='/login' />
    }
    return props.children;
};

export default Protector;