import { createAsyncThunk } from "@reduxjs/toolkit";
import LabService from "features/courses/lib/LabService";

export const deleteLab = createAsyncThunk("nested/labs/delete",
    async (id) => {
        const response = await LabService.deletelabById(id);

        return response.data;
    }
)