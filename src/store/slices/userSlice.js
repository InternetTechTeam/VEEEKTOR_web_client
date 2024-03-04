import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AuthService from "../../API/AuthService";
import { decodeToken } from "../../utils/tokens";

export const CREATE_USER = 'create-user';

const initialState = {
    userData: {
        user_id: null,
        role_id: null
    },
    exp: "",
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
        logOut: state => {
            localStorage.removeItem('token');
            return {
                ...initialState
            }
        },
        // checkAuth: state => {
        //     return {
        //         ...state,
        //         isLogin: true
        //     }
        // }
    },
    extraReducers(builder) {
        builder
        .addCase(signInUser.fulfilled, (state, action) => {
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
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
            // localStorage.setItem('token', action.payload.access_token);
            // return {
            //     ...state,
            //     isLogin: true
            // };
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
        //code
    }
);

export const selectUser = state => state.userAuth;
export const selectIsLogin = state => state.userAuth.isLogin;
export const selectIsUserData = state => state.userAuth.userData;

export const {logOut} = userSlice.actions;

export default userSlice.reducer;
