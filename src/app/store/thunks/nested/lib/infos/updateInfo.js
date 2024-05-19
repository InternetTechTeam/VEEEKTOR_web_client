import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectInfoData } from "app/store/slices/info/selectors";
import { InfoService } from "features/courses";

export const updateInfo = createAsyncThunk("nested/infos/update", 
    async (_, thunkApi) => {
        const data = selectInfoData(thunkApi.getState());
        const response = await InfoService.putInfo(data);

        return response.data;
    }
)