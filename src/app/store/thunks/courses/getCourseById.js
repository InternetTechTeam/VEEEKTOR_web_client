import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseService } from "features/courses";

export const getCourseById = createAsyncThunk("courses/current", 
    async (id) => {
        const response = await CourseService.getCourseById(id);

        return response.data;
    }
)