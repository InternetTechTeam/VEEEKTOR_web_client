import { classNames } from "shared/lib/classNames/classNames";
import classes from "./CourseCreationPage.module.scss";
import { CourseCreationForm } from "widgets/CourseCreationForm";

const CourseCreationPage = () => {
  return (
    <div className={classNames(classes.CourseCreationPage, {}, ["page"])}>
      <h1 className={classes.title}>Новый курс</h1>
      <CourseCreationForm/>
    </div>
  )
}
export default CourseCreationPage;