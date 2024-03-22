import CoursesList from '../../../components/Common/CoursesList/CoursesList';
import classes from './HomePage.module.scss'


const HomePage = () => {
  return (

    <div className={classes.home}>
         <div className={classes.sidebar}>
            sidebar
        </div>
        <div className={classes.main}>
            <CoursesList/>
        </div>
    </div>
  )
}

export default HomePage;