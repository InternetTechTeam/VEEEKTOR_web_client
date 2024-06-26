import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY } from "./config";
import {AuthService, decodeToken, inMilliSeconds} from "features/authentication";
import { selectAuthFields } from "./selectors/authFieldsSelector";

export const signInUser = createAsyncThunk("auth/signIn",
    async (_ , thunkAPI) => {
        const {email, password} = selectAuthFields(thunkAPI.getState());

        const response = await AuthService.signIn(email, password);

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
