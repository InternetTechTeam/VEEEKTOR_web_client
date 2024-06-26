import React from 'react';
import classes from './ButtonLoader.module.scss'
import Loader from '../Loader/Loader';

const ButtonLoader = (props) => {
    const {children, isLoading, ...otherProps} = props;
    return (
        <div className={classes.wrapper}>
            <button {...otherProps} className={classes.btn}>
                {children}
            </button>
            <Loader isLoading={isLoading} size={40}/>
        </div>
    )
}

export default ButtonLoader;