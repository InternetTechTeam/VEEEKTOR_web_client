import CoursesList from '../../../components/Common/CoursesList/CoursesList';
import Preloader from '../../../components/Common/Preloader/Preloader';
import { useCourses } from '../../../hooks/useCourses';
import { STATUS } from '../../../store/slices/config';
import classes from './HomePage.module.scss'


const HomePage = () => {
  const {coursesStatus} = useCourses();
  return (

    <div className={classes.home}>
          {coursesStatus === STATUS.LOADING
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