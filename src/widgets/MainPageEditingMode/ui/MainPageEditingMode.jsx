import React from 'react'
import { MarkdownViewTabs } from 'widgets/MarkdownViewTabs';
import classes from "./MainPageEditingMode.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';

const MainPageEditingMode = () => {
  return (
    <div className={classNames(classes.MainPageEditingMode)}>
        <h3 className={classes.title}>Способ отображения</h3>
        <MarkdownViewTabs/>
    </div>
  )
}

export default MainPageEditingMode