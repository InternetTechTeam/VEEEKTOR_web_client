import { classNames } from "shared/lib/classNames/classNames";
import classes from "./CourseCreationPage.module.scss";
import { CourseCreationForm } from "widgets/CourseCreationForm";
import { useSelector } from "react-redux";
import { selectCourseCreationStatus } from "app/store/slices/newCourse/selectors/courseCreationStatusSelector";
import { STATUS } from "app/store/slices/config";
import { Navigate } from "react-router-dom";
import Preloader from "shared/ui/Preloader/Preloader";
import { AppRoutes, routesPath } from "shared/config/routeConfig";

const CourseCreationPage = () => {

  const creationStatus = useSelector(selectCourseCreationStatus);

if(creationStatus === STATUS.LOADING) {
  return <Preloader/>
}

if(creationStatus === STATUS.SUCCEEDED) {
  return <Navigate to={routesPath[AppRoutes.CREATION_COURSE_SUCCESS]}/>
}

  return (
    <div className={classNames(classes.CourseCreationPage, {}, ["page"])}>
      <h1 className={classes.title}>Новый курс</h1>
      <CourseCreationForm/>
    </div>
  )
}
export default CourseCreationPage;