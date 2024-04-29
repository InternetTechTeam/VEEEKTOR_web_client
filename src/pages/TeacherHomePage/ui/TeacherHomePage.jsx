import {CoursesList} from "widgets/CoursesList";
import Loading from "shared/ui/Loading/Loading";
import { STATUS } from 'app/store/slices/config';
import { useCourses } from "features/courses/lib/useCourses";

const TeacherHomePAge = () => {
    const {coursesStatus} = useCourses();
    return (
      <div className={""}>
          <Loading isLoading={coursesStatus === STATUS.LOADING}>
              <h1 style={{textAlign:'center', marginBottom: '30px'}}>Мои курсы</h1>
              <CoursesList/>
          </Loading>
      </div>
    )
}

export default TeacherHomePAge;