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
        role: {
            name: "",
            role_id: 0
        },
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
    isInit: false,
    status: STATUS.IDLE,
    error: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearData: () => {
            return initialState;
        },
        initUser: (state) => {
            state.isInit = true;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getUserInfo.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(getUserInfo.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isInit = true;
            state.status = STATUS.SUCCEEDED;
        })
    }
});

export const {clearData, initUser} =  userSlice.actions;

export default userSlice.reducer;