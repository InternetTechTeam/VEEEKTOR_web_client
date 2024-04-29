import React from 'react';
import classes from './AuthorizationPage.module.scss';


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