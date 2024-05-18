import { createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../config";
import { createCourse } from "./thunks";
import { notify } from "shared/lib/notify/notify";

const initialState = {
    courseData: {
        name : "Новый курс",
        term : 1,
        teacher_id : 0,
        markdown :"",
        dep_id : 0,
    },
    validationErrors: undefined,
    course_id: undefined,
    status: STATUS.IDLE,
    error: null
}

export const courseCreationSlice = createSlice({
    name: "courseCreation",
    initialState,
    reducers: {
    setErrors: (state, action) => {
        state.validationErrors = action.payload;
    },
    setField: (state, action) => {
        const {name, value} = action.payload;
        state.courseData[name] = value;
    },
    setId: (state, action) => {
        const {teacher_id, dep_id} = action.payload;
        state.courseData.teacher_id = teacher_id;
        state.courseData.dep_id = dep_id;
    },
    clearCreationFields: () => {
        console.log("что");
        return initialState;
    }
    },
    extraReducers(builder) {
        builder
         .addCase(createCourse.fulfilled, (state, action) => {
            state.status = STATUS.SUCCEEDED;
            notify("Курс создан");
            state.course_id = action.payload.id;
         })
         .addCase(createCourse.pending, (state) => {
            state.status = STATUS.LOADING;
         })
         .addCase(createCourse.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            notify("Ошибка", state.status);
         })
    }
});

export const {setErrors, setField, clearCreationFields, clearFields, setId} = courseCreationSlice.actions;

export default courseCreationSlice.reducer;