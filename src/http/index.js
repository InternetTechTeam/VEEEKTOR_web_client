import axios from "axios";
// import { store } from "../store/store";
import AuthService from "../API/AuthService";
import { decodeToken, inMilliSeconds } from "../utils/tokens";
// import { updateTokens } from "../store/slices/authentication/authSlice";
import { ACCESS_TOKEN_KEY } from "../store/slices/authentication/constants";

const API_URL = "/api/";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    const {exp} = decodeToken(localStorage.getItem(ACCESS_TOKEN_KEY));

    if(AuthService.isTokenExpired(inMilliSeconds(exp))) {
        try {
            const response = await axios.post("/api/auth/refresh");
            console.log("Токены обновлены");
            localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access_token);
            config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`;

            return config;
        }
        catch (error){
            throw error;
        }
    }
    else
    {
        console.log("Токен не просрочен");
        return config;
    }
}
);

export default $api;
