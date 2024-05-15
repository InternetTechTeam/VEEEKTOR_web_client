import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import classes from "./Tabs.module.scss"

const TabContent = ({children}) => {
  return (
    <div className={classNames(classes.TabContent)}>
        {children}
    </div>
  )
}

export default TabContent