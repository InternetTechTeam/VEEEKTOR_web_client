import {CoursesList} from 'widgets/CoursesList';
import Loading from 'shared/ui/Loading/Loading';
import { useCourses } from 'features/courses/lib/useCourses';
import { STATUS } from 'app/store/slices/config';
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