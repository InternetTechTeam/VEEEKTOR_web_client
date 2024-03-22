import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN_KEY, checkAuth, selectAuthStatus } from "../store/slices/authSlice";

export const useCheckAuth = () => {
    const dispatch = useDispatch();
    const authStatus = useSelector(selectAuthStatus);
    useEffect(() => {
        if(localStorage.getItem(ACCESS_TOKEN_KEY)) {
            dispatch(checkAuth());
        }
    }, [])

    return {authStatus}
}