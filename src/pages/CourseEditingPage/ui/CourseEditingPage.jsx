import React from 'react'
import classes from "./CourseEditingPage.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import {EditingModeTabs} from 'widgets/EditingModeTabs';

const CourseEditingPage = () => {
  return (
    <div className={classNames(classes.CourseEditingPage, {}, ["page"])}>
      <h2 className={classes.title}>Режим редактирования:</h2>
      <EditingModeTabs/>
    </div>
  )
}

export default CourseEditingPage;