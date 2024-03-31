import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { selectCurrentCourse } from '../../../store/slices/courses/selectors/currentCourseSelector';
import { getCourseById } from '../../../store/slices/courses/thunks';

const CoursePage = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const course = useSelector(selectCurrentCourse);

  useEffect(() => {
    dispatch(getCourseById(id));
  }, [])

  return (
    <div>{course?.markdown}</div>
  )
}

export default CoursePage;