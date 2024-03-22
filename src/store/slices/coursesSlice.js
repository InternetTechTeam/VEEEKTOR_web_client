import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import CourseService from "../../API/CourseService";


export const COURSES_STATUS = {
    LOADING: 'loading',
    SUCCEEDED: 'succeeded',
    IDLE: 'idle',
    FAILED: 'failed'
}

const initialState = {
    courses: [],
    status: COURSES_STATUS.IDLE,
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
            state.status = COURSES_STATUS.LOADING;
        })
        .addCase(getAllCourses.fulfilled, (state, action) => {
            state.status = COURSES_STATUS.SUCCEEDED;
            state.courses = action.payload;
        })
        .addCase(getAllCourses.rejected, (state) => {
            state.status = COURSES_STATUS.FAILED;
        })
    }
});

export const getAllCourses = createAsyncThunk("courses/fetch",
async () => {
    const response = await CourseService.getAllCourses();

    return response.data;
});

export const selectCourses = state => state.userCourses.courses;
export const selectCoursesStatus = state => state.userCourses.status;

export const {removeCourses} = coursesSlice.actions;

export default coursesSlice.reducer;