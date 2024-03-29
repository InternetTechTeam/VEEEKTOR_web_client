import {createSlice } from "@reduxjs/toolkit"
import {decodeToken} from "../../../utils/tokens";
import { signInUser, checkAuth, logout } from "./thunks";
import { ACCESS_TOKEN_KEY, AUTH_STATUS} from "./constants";

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
    name: 'Auth',
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

export const {updateTokens} = authSlice.actions;

export default authSlice.reducer;