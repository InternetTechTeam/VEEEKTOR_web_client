import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectLabData } from "app/store/slices/lab/selectors";
import LabService from "features/courses/lib/LabService";

export const updateLab = createAsyncThunk("nested/lab/update", 
    async (_, thunkApi) => {
        const data = selectLabData(thunkApi.getState());
        const response = await LabService.putlab(data);

        return response.data;
    }
)