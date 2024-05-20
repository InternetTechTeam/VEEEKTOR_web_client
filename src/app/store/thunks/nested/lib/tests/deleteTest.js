import { createAsyncThunk } from "@reduxjs/toolkit";
import TestService from "features/courses/lib/TestService";

export const deleteTest = createAsyncThunk("nested/tests/delete",
    async (id) => {
        const response = await TestService.deleteTestById(id);

        return response.data;
    }
)