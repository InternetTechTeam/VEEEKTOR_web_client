import './CourseItem.scss';

const CourseItem = ({data}) => {
    const {name} = data;
  return (
    <div className='course-item'>
      {name}
    </div>
  )
}

export default CourseItem