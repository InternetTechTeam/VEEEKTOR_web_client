import React from 'react'
import { useSelector } from 'react-redux';
import {CourseItem} from 'widgets/CourseItem';
import {selectCourses} from 'app/store/slices/courses/selectors/coursesSelector';
import classes from "./CoursesList.module.scss";
import { selectUserRole } from 'app/store/slices/user/selectors/userRoleSelector';
import { isTeacher } from 'app/providers/router/lib/checkRole';
import { NewCourseItem } from 'widgets/NewCourseItem';
import TeacherOnly from 'shared/ui/TeacherOnly/TeacherOnly';

const CoursesList = () => {
    const courses = useSelector(selectCourses);
    const role = useSelector(selectUserRole);
  return (
    <div className={classes.coursesList}>
      <div className={classes.listWrapper}>
          <div className={classes.list}>
            {courses?.map((course) => {
              return <CourseItem key={course.id} data={course}/>
            })
            }
            <TeacherOnly>
              <NewCourseItem/>
            </TeacherOnly>
        </div>
      </div>
      {courses.length === 0 
      ?
      <h2 className={classes.message}>Пока что у вас нет курсов</h2>
      : null
      }
    </div>

  )
}

export default CoursesList;