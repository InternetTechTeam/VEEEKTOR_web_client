import React from 'react'
import classes from './mdStyle.module.scss'

const Img = ({props}) => {
    const {src, node, ...rest} = props;
return (
        <img className={classes.image} src={src} alt=""/>
    )
}

export default Img;