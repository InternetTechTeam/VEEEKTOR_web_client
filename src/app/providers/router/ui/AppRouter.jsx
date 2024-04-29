import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "app/store/slices/authentication/selectors/isLoginSelector";
import ProtectedRoute from "./PrivateRoute";
import { selectUserRole } from "app/store/slices/user/selectors/userRoleSelector";
import { isAdmin, isStudent, isTeacher } from "../lib/checkRole";
import { AppRoutes, routeConfig, routesPath } from "shared/config/routeConfig";

const AppRouter = () => {
    const isLogin = useSelector(selectIsLogin);
    const { name } = useSelector(selectUserRole);

    let defaultPath = "";

    if(isAdmin(name)) {
      defaultPath = routesPath[AppRoutes.TEACHER_HOME];
    }
    else if(isStudent(name)) {
      defaultPath = routesPath[AppRoutes.HOME];
    }
    else if(isTeacher(name)) {
      defaultPath = routesPath[AppRoutes.TEACHER_HOME]
    }
    return (
        <Routes>
            {Object.values(routeConfig).map(({path, element, access}) => (
            <Route key={path} path={path} element={
                <ProtectedRoute access={access} redirectPath={'/'}>
                  {element}
                </ProtectedRoute>
            }/>
          ))}
          { isLogin
            ?
            <Route path="*" element={<Navigate to={defaultPath}/>}/>
            :
            <Route path="*" element={<Navigate to={routesPath[AppRoutes.SIGN_IN]}/>}/>
          }
        </Routes>
    )
}

export default AppRouter;