import { createSlice } from "@reduxjs/toolkit";
import { SIGN_UP_STATUS } from "./sliceConfig";
import { getDepartments, getEnviroments, signUpUser } from "./thunks";
import { validate } from "features/authentication";

const initialState = {
    fields:
    {
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: '',
        dep_id: '',
        env_id: '',
        errors: {}
    },
    env_options: [],
    dep_options: [],
    status: SIGN_UP_STATUS.IDLE,
    error: null
}

const signUpSlice = createSlice({
    name: "SignUp",
    initialState,
    reducers: {
        setErrors: (state, action) => {
            state.fields.errors = action.payload;
        },
        setField: (state, action) => {
            const {name, value} = action.payload;
            state.fields[name] = value;
        },
        clearFields: (state) => {
            state = initialState;
        }
    },
    extraReducers(builder) {
                builder
                .addCase(signUpUser.pending, (state) => {
                    state.status = SIGN_UP_STATUS.LOADING;
                })
                .addCase(signUpUser.fulfilled, (state) => {
                    state.status = SIGN_UP_STATUS.SUCCESS;
                })
                .addCase(signUpUser.rejected, (state, action) => {
                    console.log(action);
                    state.status = SIGN_UP_STATUS.FAILED;
                    state.error = parseInt(action.error.message.split(" ").pop());
                })
                .addCase(getEnviroments.fulfilled, (state, action) => {
                    state.env_options = action.payload.map(env =>{ return {value: env.id, name: env.name}});
                })
                .addCase(getDepartments.fulfilled, (state, action) => {
                    state.dep_options = action.payload.map(dep =>{ return {value: dep.id, name: dep.name}});
                })
    }
    
});

export default signUpSlice.reducer;

export const {setField, clearFields, setErrors} = signUpSlice.actions;