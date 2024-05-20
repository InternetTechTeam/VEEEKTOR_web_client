import { createAsyncThunk } from "@reduxjs/toolkit";
import TestService from "features/courses/lib/TestService";

export const getTestById = createAsyncThunk("nested/tests/get",
    async (id) => {
        const response = await TestService.getTestById(Number(id));

        return response.data
    }
)