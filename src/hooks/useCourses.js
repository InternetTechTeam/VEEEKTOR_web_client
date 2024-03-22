import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectIsLogin, selectAuthStatus } from "../store/slices/authSlice"
import { getAllCourses, removeCourses, selectCoursesStatus } from "../store/slices/coursesSlice";

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
    }, 
    [isLogin]);

    return {coursesStatus};
}