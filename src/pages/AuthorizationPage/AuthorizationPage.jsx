import React from 'react';
import classes from './AuthorizationPage.module.scss';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { Route, Routes } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SIgnInForm/SignInForm';

const AuthorizationPage = ({children}) => {
  return (
    <div className={classes.authorization}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
}

export default AuthorizationPage;