import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { selectCurrentCourse } from '../../../store/slices/courses/selectors/currentCourseSelector';
import { getCourseById } from '../../../store/slices/courses/thunks';
import { selectCoursesStatus } from '../../../store/slices/courses/selectors/coursesStatusSelector';
import { STATUS } from '../../../store/slices/config';
import Loading from '../../../components/UI/Loading/Loading';
import classes from "./CoursePage.module.scss";
import CourseMdContent from '../../../components/Markdown/CourseMdContent';
import { exampleMd } from '../../../markdown/example';

const CoursePage = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectCoursesStatus);
  const course = useSelector(selectCurrentCourse);

  useEffect(() => {
    dispatch(getCourseById(id));
  }, [dispatch, id])

  return (
    <div className={classes.page}>
          <Loading isLoading={status === STATUS.LOADING}>
            <CourseMdContent content={exampleMd}/>
          </Loading>
    </div>

  )
}

export default CoursePage;