import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../config";
import { getInfoById } from "app/store/thunks/nested/lib/infos/getInfoById";
import { createInfo } from "app/store/thunks/nested/lib/infos/createInfo";
import { notify } from "shared/lib/notify/notify";
import { updateInfo } from "app/store/thunks/nested/lib/infos/updateInfo";

const initialState = {
    data: {
        id: undefined,
        course_id: undefined,
        name: undefined,
        markdown: undefined
    },
    validationErrors: {},
    isInit: false,
    status: STATUS.LOADING,
    error: undefined
}

export const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        setInfoErrors: (state, action) => {
            state.validationErrors = action.payload;
        },
        setInfoField: (state, action) => {
            const {name, value} = action.payload;
            state.data[name] = value;
        },
        clearInfoFields: () => {
            return initialState;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getInfoById.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(getInfoById.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUS.SUCCEEDED;
        })
        .addCase(createInfo.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(createInfo.fulfilled, (state) => {
            state.status = STATUS.SUCCEEDED;
            notify("Успешно");
        })
        .addCase(createInfo.rejected, (state) => {
            state.status = STATUS.FAILED;
            notify("Ошибка", state.status);
        })
        .addCase(updateInfo.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(updateInfo.fulfilled, (state, action) => {
            state.status = STATUS.SUCCEEDED;
            notify("Успешно");
        })
        .addCase(updateInfo.rejected, (state) => {
            state.status = STATUS.FAILED;
            notify("Ошибка", state.status);
        })
    }
});

export const {setInfoErrors, setInfoField, clearInfoFields} = infoSlice.actions;

export default infoSlice.reducer;