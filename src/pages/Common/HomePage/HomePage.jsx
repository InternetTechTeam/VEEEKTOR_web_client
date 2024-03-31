import CoursesList from '../../../components/Common/CoursesList/CoursesList';
import Loading from '../../../components/UI/Loading/Loading';
import { useCourses } from '../../../hooks/useCourses';
import { STATUS } from '../../../store/slices/config';
import classes from './HomePage.module.scss'


const HomePage = () => {
  const {coursesStatus} = useCourses();
  return (

    <div className={classes.home}>
        <Loading isLoading={coursesStatus === STATUS.LOADING}>
            <h1 style={{textAlign:'center', marginBottom: '30px'}}>Мои курсы</h1>
            <CoursesList/>
        </Loading>
    </div>
  )
}

export default HomePage;