import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectCourseid } from "app/store/slices/nestedPages/selectors";
import LabService from "features/courses/lib/LabService";

export const getAllLabs = createAsyncThunk("nested/labs/getAll", 
    async (_, thunkApi) => {
        const course_id = selectCourseid(thunkApi.getState());

        const response = await LabService.getlabsByCourseId(course_id);

        return response.data;
    }
)