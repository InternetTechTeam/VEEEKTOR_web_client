import { createAsyncThunk } from "@reduxjs/toolkit";
import LabService from "features/courses/lib/LabService";

export const getLabById = createAsyncThunk("nested/lab/get",
    async (id) => {
        const response = await LabService.getlabById(Number(id));

        return response.data
    }
)