import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectCourseid } from "app/store/slices/nestedPages/selectors";
import { InfoService } from "features/courses";
import LabService from "features/courses/lib/LabService";
import TestService from "features/courses/lib/TestService";

export const getAllInfos = createAsyncThunk("nested/getAll", 
    async (_, thunkApi) => {
        const course_id = selectCourseid(thunkApi.getState());

        const response = await InfoService.getInfosByCourseId(course_id);

        return response.data;
    }
)