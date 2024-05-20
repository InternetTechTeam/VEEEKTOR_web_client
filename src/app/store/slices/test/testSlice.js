import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../config";
import { notify } from "shared/lib/notify/notify";
import { getTestById } from "app/store/thunks/nested/lib/tests/getTestById";
import { createTest } from "app/store/thunks/nested/lib/tests/createTest";
import { updateTest } from "app/store/thunks/nested/lib/tests/updateTest";

const initialState = {
    data: {
       id: undefined,
       course_id: undefined,
       opens: undefined,
       closes: undefined,
       tasks_count: undefined,
       topic: undefined,
       location_id: undefined,
       attemps: undefined,
       password: undefined,
       time_limit: undefined
    },
    validationErrors: {},
    isInit: false,
    status: STATUS.LOADING,
    error: undefined
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setErrTestors: (state, action) => {
            state.validationErrors = action.payload;
        },
        setTestField: (state, action) => {
            const {name, value} = action.payload;
            state.data[name] = value;
        },
        clearTestFields: () => {
            return initialState;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getTestById.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(getTestById.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUS.SUCCEEDED;
        })
        .addCase(createTest.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(createTest.fulfilled, (state) => {
            state.status = STATUS.SUCCEEDED;
            notify("Успешно");
        })
        .addCase(createTest.rejected, (state) => {
            state.status = STATUS.FAILED;
            notify("Ошибка", state.status);
        })
        .addCase(updateTest.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(updateTest.fulfilled, (state, action) => {
            state.status = STATUS.SUCCEEDED;
            notify("Успешно");
        })
        .addCase(updateTest.rejected, (state) => {
            state.status = STATUS.FAILED;
            notify("Ошибка", state.status);
        })
    }
});

export const {setTestErrors, setTestField, clearTestFields} = testSlice.actions;

export default testSlice.reducer;