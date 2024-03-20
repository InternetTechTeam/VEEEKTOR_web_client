import axios from "axios";
import { store } from "../store/store";
import { logout, updateTokens } from "../store/slices/userSlice";

const API_URL = "/api/";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    const exp = new Date(selectExpDate(store.getState()));

    if(AuthService.isTokenExpired(exp)) {
        try {
            const response = await axios.post("/api/auth/refresh");
            console.log("Токены обновлены");
            store.dispatch(updateTokens(response.data))

            return config;
        }
        catch {
            store.dispatch(logout());
        }
    }
    else
    {
        return config;
    }
}
);

export default $api;
