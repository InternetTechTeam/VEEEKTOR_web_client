import { useDispatch, useSelector } from "react-redux";
import { selectUserStatus } from "app/store/slices/user/selectors/userStatusSelector";
import { useEffect } from "react";
import { getUserInfo } from "app/store/slices/user/thunks";
import { selectIsLogin } from "app/store/slices/authentication/selectors/isLoginSelector";
import { clearData } from "app/store/slices/user/userSlice";

export const useUserInfo = () => {
    const isLogin = useSelector(selectIsLogin);
    const userStatus = useSelector(selectUserStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLogin) {
            dispatch(getUserInfo());
        }
        else {
            dispatch(clearData());
        }
    }, 
    [isLogin, dispatch]);

    return {userStatus};
}