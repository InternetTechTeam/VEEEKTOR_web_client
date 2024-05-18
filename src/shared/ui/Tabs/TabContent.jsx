import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import classes from "./Tabs.module.scss"

const TabContent = ({children, className}) => {
  return (
    <div className={classNames(classes.TabContent, {}, [className])}>
        {children}
    </div>
  )
}

export default TabContent