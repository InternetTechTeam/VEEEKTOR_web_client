import {configureStore} from "@reduxjs/toolkit"
import coursesReducer from "./slices/courses/coursesSlice";
import authSlice from "./slices/authentication/authSlice";



const setupStore = () => {  
    return configureStore({
        reducer: 
        {
            userAuth: authSlice,
            userCourses: coursesReducer
        }
    });
}

export const store = setupStore();
