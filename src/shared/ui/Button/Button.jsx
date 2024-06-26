import React from 'react';

import classes from './Button.module.scss'

const Button = (props) => {
    const {children} = props;
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    )
}

export default Button;