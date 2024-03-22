import React from 'react'
import { useSelector } from 'react-redux';
import { selectCourses } from '../../../store/slices/coursesSlice';

const CoursesList = () => {
    const courses = useSelector(selectCourses);
  return (
    <div>
        {
            
        }
    </div>
  )
}

export default CoursesList;