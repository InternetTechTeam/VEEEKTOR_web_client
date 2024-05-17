import {configureStore} from "@reduxjs/toolkit"
import coursesReducer from "./slices/courses/coursesSlice";
import authReducer from "./slices/authentication/authSlice";
import signUpReducer from "./slices/signUp/signUpSlice";
import userReducer from  "./slices/user/userSlice";
import courseCreationReducer from "./slices/newCourse/courseCreationSlice";
import courseEditingReducer from "./slices/courseEditing/courseEditingSlice";



const setupStore = () => {  
    return configureStore({
        reducer: 
        {
            auth: authReducer,
            signUp: signUpReducer,
            courses: coursesReducer,
            courseCreation: courseCreationReducer,
            courseEditing: courseEditingReducer,
            user: userReducer
        }
    });
}

export const store = setupStore();
