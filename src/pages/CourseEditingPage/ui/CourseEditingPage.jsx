import React, { useEffect } from 'react'
import classes from "./CourseEditingPage.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import {EditingModeTabs} from 'widgets/EditingModeTabs';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getCourseById } from 'app/store/slices/courses/thunks';
import { clearEditingFields, initFields } from 'app/store/slices/courseEditing/courseEditingSlice';
import PageLoader from 'shared/ui/PageLoader/PageLoader';
import { selectEditingInit } from 'app/store/slices/courseEditing/selectors/selectEditingInit';
import { initNestedPages } from 'app/store/slices/nestedPages/nestedPagesSlice';

const CourseEditingPage = () => {

  const {course_id} = useParams(); 
  const dispatch = useDispatch();
  const isInit = useSelector(selectEditingInit)

  useEffect(() => {
    dispatch(getCourseById(course_id));
    dispatch(initNestedPages(course_id));
    return () => {
      dispatch(clearEditingFields());
    }
  }, [course_id, dispatch]);

  return (
    <PageLoader isLoading={isInit === false}>
      <div className={classNames(classes.CourseEditingPage, {}, ["page"])}>
        <h2 className="title-theme">Режим редактирования</h2>
        <EditingModeTabs/>
      </div>
    </PageLoader>
  )
}

export default CourseEditingPage;