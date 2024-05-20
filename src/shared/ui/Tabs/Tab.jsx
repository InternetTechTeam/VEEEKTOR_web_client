import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import classes from "./Tabs.module.scss";

const Tab = ({title, isActive, onClick}) => {
  return (
    <div 
    className={classNames(classes.Tab, {[classes.Active]: isActive})}
    onClick={onClick}
    >
        {title}
    </div>
  )
}

export default Tab;