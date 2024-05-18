import { classNames } from "shared/lib/classNames/classNames";
import classes from "./CourseCreationPage.module.scss";
import { CourseCreationForm } from "widgets/CourseCreationForm";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "app/store/slices/config";
import { Link} from "react-router-dom";
import { AppRoutes, routesPath } from "shared/config/routeConfig";
import { dinamicRoute } from "shared/lib/dinamicRoute/dinamicRoute";
import { useEffect } from "react";
import { clearCreationFields } from "app/store/slices/newCourse/courseCreationSlice";
import { selectCourseStatus, selectCourseId } from "app/store/slices/newCourse/selectors";

const CourseCreationPage = () => {
  const creationStatus = useSelector(selectCourseStatus);
  const newCourseId = useSelector(selectCourseId);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearCreationFields());
    }
  }, []);

  return (
    <div className={classNames(classes.CourseCreationPage, {}, ["page"])}>
      <h1 className="title-theme">Новый курс</h1>
      {creationStatus === STATUS.SUCCEEDED
      ?
        <div>
          <Link to={dinamicRoute(routesPath[AppRoutes.EDIT_COURSE].BASE, newCourseId)}>&gt;&gt; Редактировать</Link>
          <br />
          <Link to={routesPath[AppRoutes.TEACHER_HOME]}>&gt;&gt; На главную</Link>
        </div>
      :
      <CourseCreationForm status={creationStatus}/>
    }
    </div>
  )
}
export default CourseCreationPage;