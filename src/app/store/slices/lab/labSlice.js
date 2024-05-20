import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../config";
import { notify } from "shared/lib/notify/notify";
import { getLabById } from "app/store/thunks/nested/lib/labs/getLabById";
import { createLab } from "app/store/thunks/nested/lib/labs/createLab";
import { updateLab } from "app/store/thunks/nested/lib/labs/updateLab";

const initialState = {
    data: {
       id: undefined,
       course_id: undefined,
       opens: undefined,
       closes: undefined,
       topic: undefined,
       requirements: undefined,
       exaple: undefined,
       location_id: undefined,
       attemps: undefined
    },
    validationErrors: {},
    isInit: false,
    status: STATUS.LOADING,
    error: undefined
}

export const labSlice = createSlice({
    name: "lab",
    initialState,
    reducers: {
        setLabErrors: (state, action) => {
            state.validationErrors = action.payload;
        },
        setLabField: (state, action) => {
            const {name, value} = action.payload;
            state.data[name] = value;
        },
        clearLabFields: () => {
            return initialState;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getLabById.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(getLabById.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUS.SUCCEEDED;
        })
        .addCase(createLab.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(createLab.fulfilled, (state) => {
            state.status = STATUS.SUCCEEDED;
            notify("Успешно");
        })
        .addCase(createLab.rejected, (state) => {
            state.status = STATUS.FAILED;
            notify("Ошибка", state.status);
        })
        .addCase(updateLab.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(updateLab.fulfilled, (state, action) => {
            state.status = STATUS.SUCCEEDED;
            notify("Успешно");
        })
        .addCase(updateLab.rejected, (state) => {
            state.status = STATUS.FAILED;
            notify("Ошибка", state.status);
        })
    }
});

export const {setLabErrors, setLabField, clearLabFields} = labSlice.actions;

export default labSlice.reducer;