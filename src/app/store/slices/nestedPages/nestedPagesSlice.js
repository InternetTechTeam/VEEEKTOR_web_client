import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../config";
import { getAllNestedPages } from "app/store/thunks/nested/getAllNestedPages";

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
    }
})

export const {clearNestedPages, initNestedPages} = nestedPagesSlice.actions;
export default nestedPagesSlice.reducer;