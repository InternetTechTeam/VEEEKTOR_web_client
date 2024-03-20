import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice";



const setupStore = () => {
    return configureStore({
        reducer: 
        {
            userAuth: userReducer
        }
    });
}

const store = setupStore();

export default store;