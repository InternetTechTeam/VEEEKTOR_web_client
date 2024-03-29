import {createSlice } from "@reduxjs/toolkit"
import {decodeToken} from "../../../utils/tokens";
import { signInUser, checkAuth, logout } from "./thunks";
import { ACCESS_TOKEN_KEY, AUTH_STATUS} from "./constants";

const initialState = {
    isLogin: false,
    status: AUTH_STATUS.IDLE,
    error: null
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
        //sign in
        .addCase(signInUser.pending, (state) => {
            state.status = AUTH_STATUS.LOADING;
        })
        .addCase(signInUser.fulfilled, (state, action) => {
            state.status = AUTH_STATUS.SIGN_IN
            state.isLogin = true;
            localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.access_token);
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
            state.isLogin = true;
            state.status = AUTH_STATUS.SIGN_IN;
            localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.access_token);
        })
        .addCase(checkAuth.rejected, () => {
            localStorage.removeItem(ACCESS_TOKEN_KEY);
            return initialState;
        //logout
        })
        .addCase(logout.fulfilled, () => {
            localStorage.removeItem(ACCESS_TOKEN_KEY);
            return initialState;
        })
    }
});

export const {updateTokens} = authSlice.actions;

export default authSlice.reducer;