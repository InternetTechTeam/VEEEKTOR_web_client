import React from 'react'
import { useSelector } from 'react-redux';
import CourseItem from '../CourseItem/CourseItem';
import { selectCourses } from '../../../store/slices/courses/selectors';
import classes from "./CoursesList.module.scss";

const CoursesList = () => {
    const courses = useSelector(selectCourses);
  return (  
    <div className={classes.listWrapper}>
      <div className={classes.list}>
          {courses?.map((course) => {
            return <CourseItem key={course.id} data={course}/>
          })
          }
      </div>
    </div>
  )
}

export default CoursesList;