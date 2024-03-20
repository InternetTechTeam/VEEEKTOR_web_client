import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AuthService from "../../API/AuthService";
import {decodeToken} from "../../utils/tokens";

export const CREATE_USER = 'create-user';

const initialState = {
    userData: {
        user_id: null,
        role_id: null
    },
    exp: 0,
    isLogin: false,
    status: 
    {
        loading: false,
        error: '',
    }
}

export const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        updateTokens: (state, action) => {
            const {exp, user_id, role_id} = decodeToken(action.payload.access_token);

            localStorage.setItem('token', action.payload.access_token);

            return {
                ...state,
                isLogin: true,
                exp,
                userData: {
                    user_id,
                    role_id
                }
            };
        }
    },
    extraReducers(builder) {
        builder
        .addCase(signInUser.fulfilled, (state, action) => {
            const {exp, user_id, role_id} = decodeToken(action.payload.access_token);
            console.log("Вошли");
            localStorage.setItem('token', action.payload.access_token);
            return {
                ...state,
                isLogin: true,
                exp,
                userData: {
                    user_id,
                    role_id
                }
            };
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
            // localStorage.setItem('token', action.payload.access_token);
            // return {
            //     ...state,
            //     isLogin: true
            // };
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            const {exp, user_id, role_id} = decodeToken(action.payload.access_token);
            console.log("Проверка авторизации пройдена");
            localStorage.setItem('token', action.payload.access_token);
            return {
                ...state,
                isLogin: true,
                exp,
                userData: {
                    user_id,
                    role_id
                }
            };
        })
        .addCase(checkAuth.rejected, (state) => {
            console.log("Проверка авторизации не пройдена");
            localStorage.removeItem("token");
            return state;
        })
        .addCase(logout.fulfilled, (state) => {
            localStorage.removeItem("token");
            console.log("Вышли");
            return {
                ...initialState
            }
        })
    }
});

export const signInUser = createAsyncThunk("user/signIn",
    async userData => {
        const {email, password} = userData;

        const response = await AuthService.signIn(email, password);

        return response.data;
    }
);

export const signUpUser = createAsyncThunk("user/signUp",
    async userData => {
        const {name, surname, patronymic, email, password} = userData;

        const response = await AuthService.signUp(name, surname, patronymic, email, password);

        return response.data;
    }
);

export const checkAuth = createAsyncThunk("user/check_auth", 
    async () => {
        const response = await AuthService.refresh();

        return response.data;
    }
);

export const logout = createAsyncThunk("user/logout", 
    async () => {
        const response = await AuthService.logout();

        return response.data;
    }
);

export const selectUser = state => state.userAuth;
export const selectExpDate = state => state.exp;
export const selectIsLogin = state => state.userAuth.isLogin;
export const selectIsUserData = state => state.userAuth.userData;

export const {updateTokens} = userSlice.actions;

export default userSlice.reducer;
