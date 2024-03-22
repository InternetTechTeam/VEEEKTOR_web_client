import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice";
import coursesReducer from "./slices/coursesSlice";



const setupStore = () => {
    return configureStore({
        reducer: 
        {
            userAuth: authReducer,
            userCourses: coursesReducer
        }
    });
}

export const store = setupStore();
