import { useDispatch, useSelector } from "react-redux";
import { selectUserStatus } from "../store/slices/user/selectors/userStatusSelector";
import { useEffect } from "react";
import { getUserInfo } from "../store/slices/user/thunks";
import { selectIsLogin } from "../store/slices/authentication/selectors";

export const useUserInfo = () => {
    const isLogin = useSelector(selectIsLogin);
    const userStatus = useSelector(selectUserStatus);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(isLogin) {
            dispatch(getUserInfo());
        }
        else {
            
        }
    }, 
    [isLogin, dispatch]);

    return {userStatus};
}