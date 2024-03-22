import {createSlice } from "@reduxjs/toolkit"
import {decodeToken} from "../../../utils/tokens";
import { signInUser, signUpUser, checkAuth, logout } from "./thunks";
import { ACCESS_TOKEN_KEY, AUTH_STATUS, initialState } from "./constants";

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

export const {updateTokens} = authSlice.actions;

export default authSlice.reducer;