import React, { useEffect } from 'react'
import classes from "./CourseEditingPage.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import {EditingModeTabs} from 'widgets/EditingModeTabs';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from 'app/store/slices/courses/thunks';
import { selectCurrentCourse } from 'app/store/slices/courses/selectors/currentCourseSelector';
import { initFields } from 'app/store/slices/courseEditing/courseEditingSlice';

const CourseEditingPage = () => {

  const {course_id} = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseById(course_id))
  }, [course_id, dispatch]);

  return (
    <div className={classNames(classes.CourseEditingPage, {}, ["page"])}>
      <h2 className={classes.title}>Режим редактирования:</h2>
      <EditingModeTabs/>
    </div>
  )
}

export default CourseEditingPage;