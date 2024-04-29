import { selectIsLogin } from 'app/store/slices/authentication/selectors/isLoginSelector';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUserRole } from 'app/store/slices/user/selectors/userRoleSelector';
import { checkAccess } from '../lib/checkAccess';

const ProtectedRoute = ({children, access, redirectPath}) => {
    const role = useSelector(selectUserRole);
    const isLogin = useSelector(selectIsLogin);

    if(!checkAccess(access, role?.name, isLogin)) 
    {
        return <Navigate to={redirectPath} replace/>
    }   

    return children ? children : <Outlet/>;
}

export default ProtectedRoute;