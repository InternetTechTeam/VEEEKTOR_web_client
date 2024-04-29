import { useDispatch, useSelector } from "react-redux";
import { selectUserStatus } from "app/store/slices/user/selectors/userStatusSelector";
import { useLayoutEffect } from "react";
import { getUserInfo } from "app/store/slices/user/thunks";
import { selectIsLogin } from "app/store/slices/authentication/selectors/isLoginSelector";
import { clearData, initUser } from "app/store/slices/user/userSlice";
import { getInited } from "app/store/slices/authentication/selectors/getInited";
import { selectUserInit } from "app/store/slices/user/selectors/userInitSelector";

export const useUserInfo = () => {
    const isLogin = useSelector(selectIsLogin);
    const isAuthInit = useSelector(getInited);
    const userStatus = useSelector(selectUserStatus);
    const isUserInit = useSelector(selectUserInit);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if(isLogin && isAuthInit) {
            dispatch(getUserInfo());
        }
        else if(isAuthInit) {
            dispatch(initUser());
        }
        else {
            dispatch(clearData());
        }
    }, 
    [isAuthInit, isLogin, dispatch]);

    return {userStatus, isUserInit};
}