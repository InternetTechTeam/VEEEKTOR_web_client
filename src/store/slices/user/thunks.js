import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../../http";
import EducationalEnvService from "../../../API/EducationalEnvService";
import { getRoleById } from "../../../utils/roles";


export const getUserInfo = createAsyncThunk("user/data",
    async () => {
            const userRes = await $api.get("users");

            const depRes = await EducationalEnvService.getDepartmentsById(userRes.data.dep_id);

            const envRes = await EducationalEnvService.getEnviromentById(depRes.data.env_id);

            const {role_id, dep_id, ...data} = userRes.data;

            return {
                ...data,
                role:
                {
                    id: role_id,
                    name: getRoleById(role_id)
                },
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