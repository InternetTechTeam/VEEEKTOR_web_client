import axios from "axios";
import { store } from "../store/store";
import { logout, selectExpDate, updateTokens } from "../store/slices/authSlice";
import AuthService from "../API/AuthService";
import { inMilliSeconds } from "../utils/tokens";

const API_URL = "/api/";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    const exp = selectExpDate(store.getState());

    if(AuthService.isTokenExpired(inMilliSeconds(exp))) {
        try {
            const response = await axios.post("/api/auth/refresh");
            console.log("Токены обновлены");
            store.dispatch(updateTokens(response.data));
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

            return config;
        }
        catch {
            console.log("refresh Сдох (");
            store.dispatch(logout());
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
