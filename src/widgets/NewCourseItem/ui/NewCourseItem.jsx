import { Link } from 'react-router-dom';
import classes from './NewCourseItem.module.scss';
import newCourse from 'shared/assets/images/new.png'
import { AppRoutes, routesPath } from 'shared/config/routeConfig';
const NewCourseItem = () => {
  return (
    <Link to={routesPath[AppRoutes.NEW_COURSE]} className={classes.courseItem}>
        <img className={classes.icon} src={newCourse} alt="new"/>
        <p className={classes.text}>Новый курс</p>
    </Link>
  )
}

export default NewCourseItem