import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../../http";
import EducationalEnvService from "../../../API/EducationalEnvService";


export const getUserInfo = createAsyncThunk("user/data",
    async () => {
            const userRes = await $api.get("users");

            const depRes = await EducationalEnvService.getDepartmentsById(userRes.data.dep_id);

            const envRes = await EducationalEnvService.getEnviromentById(depRes.data.env_id);

            return {
                ...userRes.data,
                department:
                {
                    ...depRes.data
                },
                enviroment: 
                {
                    ...envRes.data[0]
                }
            }
    }
);