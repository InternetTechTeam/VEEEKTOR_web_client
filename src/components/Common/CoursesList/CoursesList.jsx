import React from 'react'
import { useSelector } from 'react-redux';
import CourseItem from '../CourseItem/CourseItem';
import { selectCourses } from '../../../store/slices/courses/selectors';

const CoursesList = () => {
    const courses = useSelector(selectCourses);
  return (
    <div>
        {courses?.map((course) => {
          return <CourseItem key={course.id} data={course}/>
        })
        }
    </div>
  )
}

export default CoursesList;