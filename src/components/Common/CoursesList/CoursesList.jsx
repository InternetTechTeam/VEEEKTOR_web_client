import React from 'react'
import { useSelector } from 'react-redux';
import CourseItem from '../CourseItem/CourseItem';
import { selectCourses } from '../../../store/slices/courses/selectors/coursesSelector';
import classes from "./CoursesList.module.scss";

const CoursesList = () => {
    const courses = useSelector(selectCourses);
  return (  
    <div className={classes.listWrapper}>
      {courses?.length !== 0 
      ?
      <div className={classes.list}>
        {courses?.map((course) => {
          return <CourseItem key={course.id} data={course}/>
        })
        }
      </div>
      :
      <h2>У вас пока что нет курсов</h2>
    }

    </div>
  )
}

export default CoursesList;