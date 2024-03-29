import { createSlice } from "@reduxjs/toolkit"
import { getAllCourses } from "./thunks";
import { COURSES_STATUS, initialState } from "./constants";

export const coursesSlice = createSlice({
    name: "userCourses",
    initialState,
    reducers: {
        removeCourses: () => initialState,
    },
    extraReducers(builder) {
        builder
        .addCase(getAllCourses.pending, (state) => {
            state.status = COURSES_STATUS.LOADING;
        })
        .addCase(getAllCourses.fulfilled, (state, action) => {
            state.status = COURSES_STATUS.SUCCEEDED;
            state.courses = action.payload || [];
        })
        .addCase(getAllCourses.rejected, (state) => {
            state.status = COURSES_STATUS.FAILED;
        })
    }
});

export const {removeCourses} = coursesSlice.actions;

export default coursesSlice.reducer;