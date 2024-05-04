import {CoursesList} from 'widgets/CoursesList';
import Loading from 'shared/ui/Loading/Loading';
import { useCourses } from 'features/courses/lib/useCourses';
import { STATUS } from 'app/store/slices/config';
import classes from './HomePage.module.scss'
import { useDispatch } from 'react-redux';
import { removeCourses } from 'app/store/slices/courses/coursesSlice';
import { useEffect } from 'react';


const HomePage = () => {
  const {coursesStatus} = useCourses();
  const dispatch = useDispatch();

useEffect(() => {
    return () => {dispatch(removeCourses())}
}, [dispatch])

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