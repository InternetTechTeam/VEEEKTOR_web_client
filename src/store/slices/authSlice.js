import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AuthService from "../../API/AuthService";
import {decodeToken, inMilliSeconds} from "../../utils/tokens";

export const ACCESS_TOKEN_KEY = "token";

export const AUTH_STATUS = {
    LOADING: 'loading',
    CHECK: 'check',
    SIGN_IN: 'sign_in',
    SIGN_UP: 'sign_up',
    IDLE: 'idle',
    FAILED: 'failed'
}

const initialState = {
    userData: {
        user_id: null,
        role_id: null
    },
    exp: 0,
    isLogin: false,
    status: AUTH_STATUS.IDLE,
    error: null
}

export const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        updateTokens: (state, action) => {
            const {exp, userData} = decodeToken(action.payload.access_token);
            localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.access_token);

            return {
                ...state,
                isLogin: true,
                exp,
                userData,
                status: AUTH_STATUS.SIGN_IN
            };
        }
    },
    extraReducers(builder) {
        builder
        //sign in
        .addCase(signInUser.pending, (state) => {
            state.status = AUTH_STATUS.LOADING;
        })
        .addCase(signInUser.fulfilled, (state, action) => {
            const {exp, userData} = decodeToken(action.payload.access_token);
            
            localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.access_token);
            return {
                ...state,
                isLogin: true,
                exp,
                userData,
                status: AUTH_STATUS.SIGN_IN
            };
        })
        .addCase(signInUser.rejected, (state, action) => {
            state.status = AUTH_STATUS.FAILED;
            state.error = parseInt(action.error.message.split(" ").pop());
        })
        //sign up
        .addCase(signUpUser.pending, (state) => {
            state.status = AUTH_STATUS.LOADING;
        })
        .addCase(signUpUser.fulfilled, (state) => {
            state.status = AUTH_STATUS.SIGN_UP;
        })
        .addCase(signUpUser.rejected, (state, action) => {
            state.status = AUTH_STATUS.FAILED;
            state.error = parseInt(action.error.message.split(" ").pop());
        })
        //check authentication
        .addCase(checkAuth.pending, (state) => {
            state.status = AUTH_STATUS.CHECK;
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            const {exp, userData} = decodeToken(action.payload.access_token);
            localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.access_token);
            return {
                ...state,
                isLogin: true,
                exp,
                userData,
                status: AUTH_STATUS.SIGN_IN
            };
        })
        .addCase(checkAuth.rejected, (state) => {
            localStorage.removeItem(ACCESS_TOKEN_KEY);
            return state;
        //logout
        })
        .addCase(logout.fulfilled, () => {
            localStorage.removeItem(ACCESS_TOKEN_KEY);
            return {
                ...initialState
            }
        })
    }
});

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

export const selectUser = state => state.userAuth;
export const selectAuthStatus = state => state.userAuth.status; 
export const selectExpDate = state => state.userAuth.exp;
export const selectIsLogin = state => state.userAuth.isLogin;
export const selectIsUserData = state => state.userAuth.userData;

export const {updateTokens} = authSlice.actions;

export default authSlice.reducer;
