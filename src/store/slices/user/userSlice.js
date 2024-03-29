import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../config";
import { getUserInfo } from "./thunks";

const initialState = {
    data: {
        id: 0,
        email: "",
        name: "",
        patronymic: "",
        surname: "",
        role_id: 0,
        dep_id: 0,
        department:
        {
            id: 0,
            name: "",
            env_id: 0
        },
        enviroment: 
        {
            id: 0,
            name: ""
        }
    },
    status: STATUS.IDLE,
    error: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(getUserInfo.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(getUserInfo.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUS.SUCCEEDED;
        })
    }
});


export default userSlice.reducer;