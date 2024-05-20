import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectTestData } from "app/store/slices/test/selectors";
import TestService from "features/courses/lib/TestService";

export const updateTest = createAsyncThunk("nested/tests/update", 
    async (_, thunkApi) => {
        const data = selectTestData(thunkApi.getState());
        const response = await TestService.putTest(data);

        return response.data;
    }
)