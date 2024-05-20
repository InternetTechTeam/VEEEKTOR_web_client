import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectEditingCourse } from "app/store/slices/courseEditing/selectors/selectEditingCourse";
import { CourseService } from "features/courses";

export const updateCourse = createAsyncThunk("courses/update",
 async (_, thunkAPI) => {
    const courseData = selectEditingCourse(thunkAPI.getState());
    
    const response = await CourseService.putCourse(courseData);
    console.log(response.status);
    return response.data;
})