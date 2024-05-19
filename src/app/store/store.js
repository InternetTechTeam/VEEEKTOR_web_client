import {configureStore} from "@reduxjs/toolkit"
import coursesReducer from "./slices/courses/coursesSlice";
import authReducer from "./slices/authentication/authSlice";
import signUpReducer from "./slices/signUp/signUpSlice";
import userReducer from  "./slices/user/userSlice";
import courseCreationReducer from "./slices/newCourse/courseCreationSlice";
import courseEditingReducer from "./slices/courseEditing/courseEditingSlice";
import nestedPageReducer from "./slices/nestedPages/nestedPagesSlice";
import infoReducer from "./slices/info/infoSlice";


const setupStore = () => {  
    return configureStore({
        reducer: 
        {
            auth: authReducer,
            signUp: signUpReducer,
            courses: coursesReducer,
            courseCreation: courseCreationReducer,
            courseEditing: courseEditingReducer,
            user: userReducer,
            nestedPages: nestedPageReducer,
            info: infoReducer
        }
    });
}

export const store = setupStore();
