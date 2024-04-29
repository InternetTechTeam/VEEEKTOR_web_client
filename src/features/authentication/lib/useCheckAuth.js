import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN_KEY } from "app/store/slices/authentication/config";
import { selectAuthStatus } from "app/store/slices/authentication/selectors/authStatusSelector";
import { checkAuth } from "app/store/slices/authentication/thunks";
import { getInited } from "app/store/slices/authentication/selectors/getInited";
import { initAuth } from "app/store/slices/authentication/authSlice";
export const useCheckAuth = () => {
    const dispatch = useDispatch();
    const authStatus = useSelector(selectAuthStatus);
    const isInit = useSelector(getInited);
    useLayoutEffect(() => {
        if(localStorage.getItem(ACCESS_TOKEN_KEY)) {
            dispatch(checkAuth());
        }
        else {
            dispatch(initAuth());
        }
    }, [])

    return {authStatus, isInit}
}