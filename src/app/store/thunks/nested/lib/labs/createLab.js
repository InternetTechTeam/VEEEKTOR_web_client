import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectLabData } from "app/store/slices/lab/selectors";
import LabService from "features/courses/lib/LabService";

export const createLab = createAsyncThunk("nested/labs/create",
    async (_, thunkAPI) => {
        const data = selectLabData(thunkAPI.getState());
        const response = await LabService.postlab(data);

        return response.data;
    }
)