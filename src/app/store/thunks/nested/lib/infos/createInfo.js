import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectInfoData} from "app/store/slices/info/selectors";
import { InfoService } from "features/courses";

export const createInfo = createAsyncThunk("nested/infos/create",
    async (_, thunkAPI) => {
        const data = selectInfoData(thunkAPI.getState());
        const response = await InfoService.postInfo(data);

        return response.data;
    }
)