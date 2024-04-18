import {createSlice } from "@reduxjs/toolkit"
import { signInUser, checkAuth, logout } from "./thunks";
import { ACCESS_TOKEN_KEY, AUTH_STATUS} from "./config";

const initialState = {
    isLogin: false,
    status: AUTH_STATUS.IDLE,
    fields: {
        password: undefined,
        email: undefined,
        errors: {}
    },
    error: undefined
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setErrors: (state, action) => {
            state.fields.errors = action.payload;
        },
        setField: (state, action) => {
            const {name, value} = action.payload;
            state.fields[name] = value;
        },
        setInitialFields: (state, action) => {
            const {email , password} = action.payload;
            state.fields.email = email;
            state.fields.password = password;
        },
        clearFields: (state) => {
            state = initialState;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(signInUser.pending, (state) => {
            state.status = AUTH_STATUS.LOADING;
        })
        .addCase(signInUser.fulfilled, (state, action) => {
            state.status = AUTH_STATUS.SUCCESS;
            state.isLogin = true;
            localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.access_token);
        })
        .addCase(signInUser.rejected, (state, action) => {
            state.status = AUTH_STATUS.FAILED;
            state.error = parseInt(action.error.message.split(" ").pop());
        })
        .addCase(checkAuth.pending, (state) => {
            state.status = AUTH_STATUS.CHECK;
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            state.isLogin = true;
            state.status = AUTH_STATUS.SUCCESS;
            localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.access_token);
        })
        .addCase(checkAuth.rejected, () => {
            console.log("бля((");
            localStorage.removeItem(ACCESS_TOKEN_KEY);
            return initialState;
        })
        .addCase(logout.fulfilled, () => {
            localStorage.removeItem(ACCESS_TOKEN_KEY);
            return initialState;
        })
    }
});

export const {setField,setInitialFields, clearFields, setErrors} = authSlice.actions;

export default authSlice.reducer;