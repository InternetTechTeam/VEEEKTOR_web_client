import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN_KEY } from "app/store/slices/authentication/config";
import { selectAuthStatus } from "app/store/slices/authentication/selectors/authStatusSelector";
import { checkAuth } from "app/store/slices/authentication/thunks";
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