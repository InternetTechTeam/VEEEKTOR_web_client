import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import classes from "./CoursePropertiesEditingMode.module.scss"

const CoursePropertiesEditingMode = () => {
  return (
    <div className={classNames(classes.CoursePropertiesEditingMode)}>
      Свойства курса
    </div>
  )
}

export default CoursePropertiesEditingMode