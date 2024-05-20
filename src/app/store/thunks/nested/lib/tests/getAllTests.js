import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectCourseid } from "app/store/slices/nestedPages/selectors";
import TestService from "features/courses/lib/TestService";

export const getAllTests = createAsyncThunk("nested/tests/getAll", 
    async (_, thunkApi) => {
        const course_id = selectCourseid(thunkApi.getState());

        const response = await TestService.getTestsByCourseId(course_id);

        return response.data;
    }
)