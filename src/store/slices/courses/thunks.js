import { createAsyncThunk } from "@reduxjs/toolkit";
import CourseService from "../../../API/CourseService";

export const getAllCourses = createAsyncThunk("courses/all",
async () => {
    const response = await CourseService.getAllCourses();

    return response.data;
});

export const getCourseById = createAsyncThunk("courses/current", 
    async (id) => {
        const response = await CourseService.getCourseById(id);

        return response.data;
    }
)