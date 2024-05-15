import React from 'react'
import classes from "./CourseEditingPage.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import EditingModeTabs from 'widgets/EditingModeTabs/ui/EditingModeTabs';

const CourseEditingPage = () => {
  return (
    <div className={classNames(classes.CourseEditingPage, {}, ["page"])}>
      <h1>Редактирование курса</h1>
      <EditingModeTabs/>
    </div>
  )
}

export default CourseEditingPage;