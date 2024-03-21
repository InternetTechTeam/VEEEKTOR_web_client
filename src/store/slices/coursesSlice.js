import { createSlice } from "@reduxjs/toolkit"


export const STATUS = {
    LOADING: 'loading',
    SUCCEEDED: 'succeeded',
    IDLE: 'idle',
    FAILED: 'failed'
}

const initialState = {
    courses: [],
    status: STATUS.IDLE,
    error: null
}

export const coursesSlice = createSlice({
    name: "userCourses",
    initialState,
    reducers: {

    },
});