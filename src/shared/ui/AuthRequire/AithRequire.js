import { selectIsLogin } from 'app/store/slices/authentication/selectors/isLoginSelector';
import React from 'react'
import { useSelector } from 'react-redux';

const AuthRequire = ({children}) => {

    const  isLogin = useSelector(selectIsLogin);

    if(!isLogin) return null;

    return children;
}

export default AuthRequire;