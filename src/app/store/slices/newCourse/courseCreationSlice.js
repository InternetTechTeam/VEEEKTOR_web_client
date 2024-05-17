import { createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../config";
import { createCourse } from "./thunks";

const initialState = {
    data: {
        name : "Новый курс",
        term : 1,
        teacher_id : 0,
        markdown :"",
        dep_id : 0,
        course_id: undefined,
        errors: {},
    },
    status: STATUS.IDLE,
    error: null
}

export const courseCreationSlice = createSlice({
    name: "courseCreation",
    initialState,
    reducers: {
    setErrors: (state, action) => {
        state.data.errors = action.payload;
    },
    setField: (state, action) => {
        const {name, value} = action.payload;
        state.data[name] = value;
    },
    setId: (state, action) => {
        const {teacher_id, dep_id} = action.payload;
        state.data.teacher_id = teacher_id;
        state.data.dep_id = dep_id;
    },
    clearFields: (state) => {
        state = initialState;
    }
    },
    extraReducers(builder) {
        builder
         .addCase(createCourse.fulfilled, (state, action) => {
            state.status = STATUS.SUCCEEDED;
            state.data.course_id = action.payload.id;
         })
         .addCase(createCourse.pending, (state) => {
            state.status = STATUS.LOADING;
         })
         .addCase(createCourse.rejected, (state, action) => {
            state.status = STATUS.FAILED;
         })
    }
});

export const {setErrors, setField, clearFields, setId} = courseCreationSlice.actions;

export default courseCreationSlice.reducer;