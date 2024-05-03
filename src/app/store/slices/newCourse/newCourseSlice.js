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
    },
    prevData: null,
    course_id: null,
    validationErrors: {},
    status: STATUS.IDLE,
    error: null
}

export const coursesSlice = createSlice({
    name: "newCourse",
    initialState,
    reducers: {
    setErrors: (state, action) => {
        state.validationErrors = action.payload;
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
            console.log(action);
            state.status = STATUS.SUCCEEDED;
            state.course_id = action.payload.id;
         })
         .addCase(createCourse.pending, (state) => {
            state.status = STATUS.LOADING;
         })
         .addCase(createCourse.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            console.log(action);
         })
    }
});

export const {setErrors, setField, clearFields, setId} = coursesSlice.actions;

export default coursesSlice.reducer;