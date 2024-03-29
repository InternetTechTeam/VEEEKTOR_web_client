
export const useUserInfo = () => {
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
    [isLogin, dispatch]);

    return {coursesStatus};
}