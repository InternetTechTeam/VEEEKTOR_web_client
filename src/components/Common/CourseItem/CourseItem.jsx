import { Link } from 'react-router-dom';
import './CourseItem.scss';

const CourseItem = ({data}) => {
    const {name, id} = data;
  return (
    <Link to={`/courses/${id}`} className='course-item'>
      {name}
    </Link>
  )
}

export default CourseItem