import { createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../config";
import { getCourseById } from "../courses/thunks";
import { updateCourse } from "app/store/thunks/courses/updateCourse";
import { notify } from "shared/lib/notify/notify";

const initialState = {
    course: {
        id: undefined,
        name: undefined,
        term: undefined,
        teacher_id: undefined,
        markdown: undefined,
        dep_id: undefined,
    },
    validationErrors: {},
    isInit: false,
    status: STATUS.LOADING,
    error: null
}

export const courseEditingSlice = createSlice({
    name: "courseEditing",
    initialState,
    reducers: {
    setErrors: (state, action) => {
        state.validationErrors = action.payload;
    },
    setField: (state, action) => {
        const {name, value} = action.payload;
        state.course[name] = value; 
    },
    clearFields: (state) => {
        state = initialState;
    }
    },
    extraReducers(builder) {
        builder.
        addCase(getCourseById.fulfilled, (state, action) => {
            state.course = action.payload;
            state.status = STATUS.IDLE;
            state.isInit = true;
        }).
        addCase(getCourseById.rejected,
        (state, action) => {
            state.status = STATUS.FAILED;
        }).
        addCase(updateCourse.pending, (state) => {
            state.status = STATUS.LOADING;
        }).
        addCase(updateCourse.fulfilled, (state) => {
            state.status = STATUS.SUCCEEDED;
            notify("Данные обновлены");
        }).
        addCase(updateCourse.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            notify("Ошибка", state.status);
            state.error = action.error;
        })
    }
});

export const {setErrors, setField, clearFields, setId, initFields} = courseEditingSlice.actions;

export default courseEditingSlice.reducer;