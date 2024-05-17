import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectCourseData } from "./selectors/courseDataSelector";
import { CourseService } from "features/courses";

export const createCourse = createAsyncThunk("courses/newCourse",
async (_, thunkAPI) => {
    const courseData = selectCourseData(thunkAPI.getState());
    try {
        const response = await CourseService.postCourse(courseData);
        return response.data;
    } 
    catch(error) {
       throw error;
    }
});