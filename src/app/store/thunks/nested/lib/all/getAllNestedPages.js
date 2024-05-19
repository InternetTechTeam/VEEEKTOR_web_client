import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectCourseid } from "app/store/slices/nestedPages/selectors";
import { InfoService } from "features/courses";
import LabService from "features/courses/lib/LabService";
import TestService from "features/courses/lib/TestService";

export const getAllNestedPages = createAsyncThunk("nested/getAll", 
    async (_, thunkApi) => {
        const course_id = selectCourseid(thunkApi.getState());

        const labsResponse = await LabService.getlabsByCourseId(course_id);
        const testsResponse = await TestService.getTestsByCourseId(course_id);
        const infosResponse = await InfoService.getInfosByCourseId(course_id);

        return {
            labs: labsResponse.data,
            tests: testsResponse.data,
            infos: infosResponse.data,
        }
    }
)