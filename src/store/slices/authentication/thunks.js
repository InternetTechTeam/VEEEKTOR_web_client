import { createAsyncThunk } from "@reduxjs/toolkit";
import { decodeToken, inMilliSeconds } from "../../../utils/tokens";
import { ACCESS_TOKEN_KEY } from "./constants";
import AuthService from "../../../API/AuthService";

export const signInUser = createAsyncThunk("auth/signIn",
    async userData => {
        const {email, password} = userData;

        const response = await AuthService.signIn(email, password);

        return response.data;
    }
);

export const signUpUser = createAsyncThunk("auth/signUp",
    async userData => {
        const {name, surname, patronymic, email, password} = userData;

        const response = await AuthService.signUp(name, surname, patronymic, email, password);

        return response.data;
    }
);

export const checkAuth = createAsyncThunk("auth/check_auth",
    async () => {
        const {exp} = decodeToken(localStorage.getItem(ACCESS_TOKEN_KEY));
        if(AuthService.isTokenExpired(inMilliSeconds(exp)))
        {
            const response = await AuthService.refresh();
            return response.data;
        }
        else
        {
            return {access_token: localStorage.getItem(ACCESS_TOKEN_KEY)};
        }
    }
);

export const logout = createAsyncThunk("auth/logout", 
    async () => {
        const response = await AuthService.logout();

        return response.data;
    }
);