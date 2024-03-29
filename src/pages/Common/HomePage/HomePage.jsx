import CoursesList from '../../../components/Common/CoursesList/CoursesList';
import Preloader from '../../../components/Common/Preloader/Preloader';
import { useCourses } from '../../../hooks/useCourses';
import { COURSES_STATUS } from '../../../store/slices/courses/constants';
import classes from './HomePage.module.scss'


const HomePage = () => {
  const {coursesStatus} = useCourses();
  return (

    <div className={classes.home}>
          {coursesStatus === COURSES_STATUS.LOADING
          ?
          <Preloader/>
          :
          <>
            <h1 style={{textAlign:'center', marginBottom: '30px'}}>Мои курсы</h1>
            <CoursesList/>
          </>

          }
    </div>
  )
}

export default HomePage;