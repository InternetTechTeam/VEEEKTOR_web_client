import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { selectCurrentCourse } from 'app/store/slices/courses/selectors/currentCourseSelector';
import { getCourseById } from 'app/store/slices/courses/thunks';
import { selectCoursesStatus } from 'app/store/slices/courses/selectors/coursesStatusSelector';
import { STATUS } from 'app/store/slices/config';
import classes from "./CoursePage.module.scss";
import MdContent from 'shared/md/MdContent/MdContent';
import PageLoader from 'shared/ui/PageLoader/PageLoader';

const CoursePage = () => {

  const {course_id} = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectCoursesStatus);
  const course = useSelector(selectCurrentCourse);

  useLayoutEffect(() => {
    dispatch(getCourseById(course_id));
  }, [dispatch, course_id])

  return (
    <div className={classes.page}>
          <PageLoader isLoading={status === STATUS.LOADING}>
            <MdContent content={course?.markdown}/>
          </PageLoader>
    </div>
  )}

export default CoursePage;