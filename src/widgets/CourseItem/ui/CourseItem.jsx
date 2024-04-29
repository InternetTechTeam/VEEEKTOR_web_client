import { Link } from 'react-router-dom';
import classes from './CourseItem.module.scss';
import more from "shared/assets/icons/more.svg";

const CourseItem = ({data}) => {
    const {name, id, term, department} = data;
  return (
    <Link to={`/courses/${id}`} className={classes.courseItem}>
      <div className={classes.line}></div>
      <div className="">
      <p className={classes.term}>Семестр {term}</p>
      <p className={classes.courseName}>{name}</p>
      <p>Кафедра {department}</p>
      </div>
      <img className={classes.more} src={more} alt="more"/>
    </Link>
  )
}

export default CourseItem