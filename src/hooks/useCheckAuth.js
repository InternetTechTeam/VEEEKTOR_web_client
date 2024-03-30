import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN_KEY } from "../store/slices/authentication/config";
import { selectAuthStatus } from "../store/slices/authentication/selectors/authStatusSelector";
import { checkAuth } from "../store/slices/authentication/thunks";
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