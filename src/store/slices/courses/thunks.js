import { createAsyncThunk } from "@reduxjs/toolkit";
import CourseService from "../../../API/CourseService";

export const getAllCourses = createAsyncThunk("courses/fetch",
async () => {
    const response = await CourseService.getAllCourses();

    return response.data;
});