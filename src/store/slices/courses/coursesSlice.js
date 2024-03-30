import { createSlice } from "@reduxjs/toolkit"
import { getAllCourses } from "./thunks";
import { STATUS } from "../config";

const initialState = {
    courses: [],
    currentCourse: undefined,
    status: STATUS.IDLE,
    error: null
}

export const coursesSlice = createSlice({
    name: "userCourses",
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
    }
});

export const {removeCourses} = coursesSlice.actions;

export default coursesSlice.reducer;