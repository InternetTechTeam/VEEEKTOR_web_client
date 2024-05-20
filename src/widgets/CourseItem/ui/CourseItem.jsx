import { Link } from 'react-router-dom';
import classes from './CourseItem.module.scss';
import more from "shared/assets/icons/more.svg";
import edit from "shared/assets/images/pencil.png";
import star from "shared/assets/icons/star.svg";
import TeacherOnly from 'shared/ui/TeacherOnly/TeacherOnly';
import CourseItemMenu from './CourseItemMenu';
import { dinamicRoute } from 'shared/lib/dinamicRoute/dinamicRoute';
import { AppRoutes, routesPath } from 'shared/config/routeConfig';


const CourseItem = ({data}) => {
    const {name, id, term, department} = data;
  return (
    <div className={classes.courseItem}>
      <div className={classes.line}></div>
      <p className={classes.term}>Семестр {term}</p>
      <Link to={dinamicRoute(routesPath[AppRoutes.COURSES].BASE, id)} className="">
      <p className={classes.courseName}>{name}</p>
      <p>Кафедра {department}</p>
      </Link>
      <div className={classes.options}>
        <img src={star} className={classes.favorites} alt="favorites"/>
        <TeacherOnly>
          <Link to={dinamicRoute(routesPath[AppRoutes.EDIT_COURSE].BASE, id)}>
            <img className={classes.edit} src={edit} alt="edit"/>
          </Link>
        </TeacherOnly>
        <CourseItemMenu id={id} className={classes.more}>
          <img  src={more} alt="more"/>
        </CourseItemMenu>
      </div>

    </div>
  )
}

export default CourseItem