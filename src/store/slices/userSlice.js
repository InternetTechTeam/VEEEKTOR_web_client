import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AuthService from "../../API/AuthService";

const initialState = {
    access: "",
    refresh: "",
    userData: {
        user_id: null,
        role_id: null
    },
    isLogin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: state => {
            localStorage.removeItem('token');
            return {
                ...state,
                isLogin: false
            }
        },
        signIn: (state, action) => {
            localStorage.setItem('token', "ass");
            return {
                ...state,
                isLogin: true
            }
        },
        signUp: (state, action) => {
            localStorage.setItem('token', "ass");
            return {
                ...state,
                isLogin: true
            }
        },
        checkAuth: state => {
            return {
                ...state,
                isLogin: true
            }
        }
    },
    // extraReducers(builder) {
    //     builder
    //     .addCase(signInUser.fulfilled, (state, action) => {
    //         localStorage.setItem('token', action.token);
            
    //         return {
    //             ...state,
    //             isLogin: true
    //         };
    //     })
    // }
});

// export const signInUser = createAsyncThunk("user/signIn",
//     async userData => {
//         const {email, password} = userData;

//         const response = await AuthService.signIn(email, password);

//         return response.data;
//     }
// );

// export const signUpUser = createAsyncThunk("user/signIn",
//     async userData => {
//         const {name, surname, patronymic, email, password} = userData;

//         const response = await AuthService.signUp(name, surname, patronymic, email, password);

//         return response.data;
//     }
// );

export const selectUser = state => state.user;
export const selectIsLogin = state => state.user.isLogin;

export const {logOut, signIn, signUp, checkAuth} = userSlice.actions;

export default userSlice.reducer;
