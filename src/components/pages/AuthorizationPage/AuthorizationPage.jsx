import React from 'react';
import classes from './AuthorizationPage.module.scss';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { Route, Routes } from 'react-router-dom';
import SignUpForm from '../../SignUpForm/SignUpForm';
import SignInForm from '../../SIgnInForm/SignInForm';

const AuthorizationPage = () => {
  return (
    <div className={classes.authorization}>
      <div className={classes.content}>
        <Routes>
          <Route path='/sign_up' element={<SignUpForm/>}/>
          <Route path='/' element={<SignInForm/>}/>
        </Routes>

      </div>
    </div>
  )
}

export default AuthorizationPage;