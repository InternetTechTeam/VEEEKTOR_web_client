import CoursesList from "widgets/CoursesList";
import Loading from "widgets/Loading";
import { useCourses } from "features/courses/lib/useCourses";

const TeacherHomePAge = () => {
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

export default TeacherHomePAge;