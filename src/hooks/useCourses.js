import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectIsLogin } from "../store/slices/authentication/selectors/isLoginSelector";
import { getAllCourses } from "../store/slices/courses/thunks";
import { removeCourses } from "../store/slices/courses/coursesSlice";
import { selectCoursesStatus } from "../store/slices/courses/selectors/coursesStatusSelector";

export const useCourses = () => {
    const isLogin = useSelector(selectIsLogin);
    const coursesStatus = useSelector(selectCoursesStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLogin) {
            dispatch(getAllCourses());
        }
        else {
            dispatch(removeCourses());
        }

        return () => dispatch(removeCourses());
    }, 
    [isLogin, dispatch]);

    return {coursesStatus};
}