import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectTestData } from "app/store/slices/test/selectors";
import TestService from "features/courses/lib/TestService";

export const createTest = createAsyncThunk("nested/tests/create",
    async (_, thunkAPI) => {
        const data = selectTestData(thunkAPI.getState());
        const response = await TestService.postTest(data);

        return response.data;
    }
)