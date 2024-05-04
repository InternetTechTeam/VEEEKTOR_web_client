import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from "./CourseCreationSuccessPage.module.scss";
import { AppRoutes, routesPath } from 'shared/config/routeConfig';
import { useSelector } from 'react-redux';
import { selectCourseCreationId } from 'app/store/slices/newCourse/selectors/courseCreationIdSelector';
import { dinamicRoute } from 'shared/lib/dinamicRoute/dinamicRoute';

const CourseCreationSuccessPage = () => {

  const newCourseId = useSelector(selectCourseCreationId);

  return (
    <div className={classNames(classes.CourseCreationSuccessPage, {}, ["page"])}>
        <h1 className={classes.title}>Курс успешно создан</h1>
        <Link to={dinamicRoute(routesPath[AppRoutes.EDIT_COURSE].BASE, newCourseId)}>Редактировать</Link>
        <Link to={routesPath[AppRoutes.TEACHER_HOME]}>На главную</Link>
    </div>
  )
}

export default CourseCreationSuccessPage;