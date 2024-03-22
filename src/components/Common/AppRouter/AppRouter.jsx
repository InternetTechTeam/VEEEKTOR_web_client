import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { privateRoutes, publicRoutes } from "../../../router";
import { selectIsLogin } from "../../../store/slices/authentication/selectors";

const AppRouter = () => {
    const isLogin = useSelector(selectIsLogin);
    return (
        isLogin
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route path={route.path} exact={route.exact} element={route.element} key={route.path}/>
            )}
            <Route path='*' element={<Navigate to="/home" replace/>}/>
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route path={route.path} exact={route.exact} element={route.element} key={route.path}/>
            )}
            <Route path='*' element={<Navigate to="/sign_in" replace/>}/>
        </Routes>
    )
}

export default AppRouter;