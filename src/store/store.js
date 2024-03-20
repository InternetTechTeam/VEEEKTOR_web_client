import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice";



export const setupStore = () => {
    return configureStore({
        reducer: 
        {
            userAuth: userReducer
        }
    });
}


