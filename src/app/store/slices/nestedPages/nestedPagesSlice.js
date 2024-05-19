import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../config";
import { getAllNestedPages } from "app/store/thunks/nested/lib/all/getAllNestedPages";
import { deleteInfo } from "app/store/thunks/nested/lib/infos/deleteInfo";
import { notify } from "shared/lib/notify/notify";

const initialState = {
    labs: [],
    tests: [],
    infos: [],
    course_id: undefined,
    isInit: false,
    status: STATUS.LOADING,
    erorr: undefined
}

export const nestedPagesSlice = createSlice({
    name: "nestedPages",
    initialState,
    reducers: {
        clearNestedPages: () => initialState,
        initNestedPages: (state, action) => {
            state.course_id = action.payload;
            state.isInit = true;
        } 
    },
    extraReducers(builder) {
        builder
        .addCase(getAllNestedPages.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(getAllNestedPages.fulfilled, (state, action) => {
            const {infos, labs, tests} = action.payload;
            state.infos = infos;
            state.labs = labs;
            state.tests = tests;
            state.status = STATUS.SUCCEEDED;
        })
        .addCase(deleteInfo.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(deleteInfo.fulfilled, (state) => {
            state.status =STATUS.SUCCEEDED;
            notify("Страница удалена");
        })
        .addCase(deleteInfo.rejected, (state) => {
            state.status = STATUS.FAILED;
            notify("Ошибка");
        })
    }
})

export const {clearNestedPages, initNestedPages} = nestedPagesSlice.actions;
export default nestedPagesSlice.reducer;