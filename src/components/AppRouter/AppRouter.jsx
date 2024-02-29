import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../store/slices/userSlice";
import { privateRoutes, publicRoutes } from "../../router";

const AppRouter = () => {
    const isLogin = useSelector(state => selectIsLogin(state));
    console.log(isLogin);
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