import {CoursesList} from "widgets/CoursesList";
import { STATUS } from 'app/store/slices/config';
import { useCourses } from "features/courses/lib/useCourses";
import classes from "./TeacherHomePage.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCourses } from "app/store/slices/courses/coursesSlice";
import PageLoader from "shared/ui/PageLoader/PageLoader";

const TeacherHomePage = () => {
    const {coursesStatus} = useCourses();
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(removeCourses());
        }
    }, [dispatch])
    return (
      <div className={classes.home}>
          <PageLoader isLoading={coursesStatus === STATUS.LOADING}>
              <h1 style={{textAlign:'center', marginBottom: '30px'}}>Мои курсы</h1>
              <CoursesList/>
          </PageLoader>
      </div>
    )
}

export default TeacherHomePage;