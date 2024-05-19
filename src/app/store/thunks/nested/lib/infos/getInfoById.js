import { createAsyncThunk } from "@reduxjs/toolkit";
import { InfoService } from "features/courses";

export const getInfoById = createAsyncThunk("nested/infos/get",
    async (id) => {
        const response = await InfoService.getInfoById(Number(id));

        return response.data
    }
)