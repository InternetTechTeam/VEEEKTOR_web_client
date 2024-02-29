import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from '../../store/slices/userSlice';

const RequireAuth = ({children}) => {
    const isLogin = useSelector(state => selectIsLogin(state))
    if(!isLogin)
    {
        return <Navigate to="/sign_in" replace/>
    }

    return children;
}

export default RequireAuth;