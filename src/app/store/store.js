import {configureStore} from "@reduxjs/toolkit"
import coursesReducer from "./slices/courses/coursesSlice";
import authReducer from "./slices/authentication/authSlice";
import signUpReducer from "./slices/signUp/signUpSlice";
import userReducer from  "./slices/user/userSlice";
import newCourseReducer from "./slices/newCourse/newCourseSlice";



const setupStore = () => {  
    return configureStore({
        reducer: 
        {
            auth: authReducer,
            signUp: signUpReducer,
            courses: coursesReducer,
            newCourse: newCourseReducer,
            user: userReducer
        }
    });
}

export const store = setupStore();
