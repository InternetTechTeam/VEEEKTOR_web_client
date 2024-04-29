import { createSlice } from "@reduxjs/toolkit"
import { getAllCourses, getCourseById } from "./thunks";
import { STATUS } from "../config";

const initialState = {
    courses: [],
    currentCourse: undefined,
    status: STATUS.IDLE,
    error: null
}

export const coursesSlice = createSlice({
    name: "сourses",
    initialState,
    reducers: {
        removeCourses: () => initialState,
    },
    extraReducers(builder) {
        builder
        .addCase(getAllCourses.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(getAllCourses.fulfilled, (state, action) => {
            state.status = STATUS.SUCCEEDED;
            state.courses = action.payload || [];
        })
        .addCase(getAllCourses.rejected, (state) => {
            state.status = STATUS.FAILED;
        })  
        .addCase(getCourseById.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(getCourseById.fulfilled, (state, action) => {
            state.status = STATUS.SUCCEEDED;
            state.currentCourse = action.payload;
        })
    }
});

export const {removeCourses} = coursesSlice.actions;

export default coursesSlice.reducer;