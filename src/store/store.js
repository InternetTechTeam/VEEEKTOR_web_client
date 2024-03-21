import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/authSlice";



const setupStore = () => {
    return configureStore({
        reducer: 
        {
            userAuth: userReducer
        }
    });
}

export const store = setupStore();
