import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { selectCurrentCourse } from 'app/store/slices/courses/selectors/currentCourseSelector';
import { getCourseById } from 'app/store/slices/courses/thunks';
import { selectCoursesStatus } from 'app/store/slices/courses/selectors/coursesStatusSelector';
import { STATUS } from 'app/store/slices/config';
import Loading from 'shared/ui/Loading/Loading';
import classes from "./CoursePage.module.scss";
import MdContent from 'shared/md/MdContent/MdContent';

const CoursePage = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectCoursesStatus);
  const course = useSelector(selectCurrentCourse);

  useLayoutEffect(() => {
    dispatch(getCourseById(id));
  }, [dispatch, id])

  return (
    <div className={classes.page}>
          <Loading isLoading={status === STATUS.LOADING}>
            <MdContent content={course?.markdown}/>
          </Loading>
    </div>

  )
}

export default CoursePage;