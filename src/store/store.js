import {configureStore} from "@reduxjs/toolkit"
import coursesReducer from "./slices/courses/coursesSlice";
import authReducer from "./slices/authentication/authSlice";
import signUpReducer from "./slices/signUp/signUpSlice";



const setupStore = () => {  
    return configureStore({
        reducer: 
        {
            userAuth: authReducer,
            userCourses: coursesReducer,
            userSignUp: signUpReducer
        }
    });
}

export const store = setupStore();
