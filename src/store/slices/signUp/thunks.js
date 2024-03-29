import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../API/AuthService";
import { selectFields } from "./selectors/fieldsSelector";
import EducationalEnvService from "../../../API/EducationalEnvService";

export const signUpUser = createAsyncThunk("userSignUp/signUp",
    async (_, thunkAPI) => {
        const {name, surname, patronymic, email, password, dep_id} = selectFields(thunkAPI.getState());

        const response = await AuthService.signUp(name, surname, patronymic, email, password, parseInt(dep_id));

        return response.data;
    }
);

export const getEnviroments = createAsyncThunk("userSignUp/enviroments",
    async (I) => {
        const response = await EducationalEnvService.getAllEnviroments();

        return response.data;
    }
)

export const getDepartments = createAsyncThunk("userSignUp/departments",
    async (_ , thunkAPI) => {
        const {env_id} = selectFields(thunkAPI.getState());

        const response = await EducationalEnvService.getDepartmentsByEnvId(env_id);

        return response.data;
    }
)