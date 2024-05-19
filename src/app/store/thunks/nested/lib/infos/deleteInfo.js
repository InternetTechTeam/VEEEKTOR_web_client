import { createAsyncThunk } from "@reduxjs/toolkit";
import { InfoService } from "features/courses";

export const deleteInfo = createAsyncThunk("nested/info/delete",
    async (id) => {
        const response = await InfoService.deleteInfoById(id);

        return response.data;
    }
)